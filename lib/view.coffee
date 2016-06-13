{View, TextEditorView} = require 'atom-space-pen-views'
{CompositeDisposable} = require 'atom'
# Util = require './project/util'
buildTextEditor = require './build-text-editor'

module.exports =
class PanelView
  @content: (model) ->
    findEditor = buildTextEditor
      mini: true
      tabLength: 2
      softTabs: true
      softWrapped: false
      placeholderText: 'Find in current buffer'

    @div tabIndex: -1, class: 'find-and-replace', =>
      @header class: 'header', =>
        @span outlet: 'descriptionLabel', class: 'header-item description', 'Find in Current Buffer'
        @span class: 'header-item options-label pull-right', =>
          @span 'Finding with Options: '
          @span outlet: 'optionsLabel', class: 'options'

      @section class: 'input-block find-container', =>
        @div class: 'input-block-item input-block-item--flex editor-container', =>
          @subview 'findEditor', new TextEditorView(editor: findEditor)
          @div class: 'find-meta-container', =>
            @span outlet: 'resultCounter', class: 'text-subtle result-counter', ''

        @div class: 'input-block-item', =>
          @div class: 'btn-group btn-group-find', =>
            @button outlet: 'nextButton', class: 'btn', 'Find'
          @div class: 'btn-group btn-toggle btn-group-options', =>
            @button outlet: 'wholeWordOptionButton', class: 'btn option-whole-word', =>
              @raw '<svg class="icon"><use xlink:href="#find-and-replace-icon-word" /></svg>'

  initialize: () ->
    @subscriptions = new CompositeDisposable

    @handleEvents()

    @clearMessage()
    @updateOptionViews()
    @updateReplaceEnablement()
    @createWrapIcon()

  destroy: ->
    @subscriptions?.dispose()
    @tooltipSubscriptions?.dispose()

  setPanel: (@panel) ->
    @subscriptions.add @panel.onDidChangeVisible (visible) =>
      if visible then @didShow() else @didHide()

  didShow: ->
    # atom.views.getView(atom.workspace).classList.add('find-visible')
    # return if @tooltipSubscriptions?
    #
    # @tooltipSubscriptions = subs = new CompositeDisposable
    # subs.add atom.tooltips.add @regexOptionButton,
    #   title: "Use Regex"
    #   keyBindingCommand: 'find-and-replace:toggle-regex-option',
    #   keyBindingTarget: @findEditor.element
    # subs.add atom.tooltips.add @caseOptionButton,
    #   title: "Match Case",
    #   keyBindingCommand: 'find-and-replace:toggle-case-option',
    #   keyBindingTarget: @findEditor.element
    # subs.add atom.tooltips.add @selectionOptionButton,
    #   title: "Only In Selection",
    #   keyBindingCommand: 'find-and-replace:toggle-selection-option',
    #   keyBindingTarget: @findEditor.element
    # subs.add atom.tooltips.add @wholeWordOptionButton,
    #   title: "Whole Word",
    #   keyBindingCommand: 'find-and-replace:toggle-whole-word-option',
    #   keyBindingTarget: @findEditor.element
    #
    # subs.add atom.tooltips.add @nextButton,
    #   title: "Find Next",
    #   keyBindingCommand: 'find-and-replace:find-next',
    #   keyBindingTarget: @findEditor.element

  didHide: ->
    # @hideAllTooltips()
    # workspaceElement = atom.views.getView(atom.workspace)
    # workspaceElement.focus()
    # workspaceElement.classList.remove('find-visible')

  hideAllTooltips: ->
    # @tooltipSubscriptions.dispose()
    # @tooltipSubscriptions = null

  handleEvents: ->
    # @handleFindEvents()
    #
    # @subscriptions.add atom.commands.add @findEditor.element,
    #   'core:confirm': => @confirm()
    #   'find-and-replace:confirm': => @confirm()
    #   'find-and-replace:show-previous': => @showPrevious()
    #   'find-and-replace:find-all': => @findAll()
    #
    # @subscriptions.add atom.commands.add @replaceEditor.element,
    #   'core:confirm': => @replaceNext()
    #
    # @subscriptions.add atom.commands.add @element,
    #   'core:close': => @panel?.hide()
    #   'core:cancel': => @panel?.hide()
    #   'find-and-replace:focus-next': @toggleFocus
    #   'find-and-replace:focus-previous': @toggleFocus
    #   'find-and-replace:toggle-regex-option': @toggleRegexOption
    #   'find-and-replace:toggle-case-option': @toggleCaseOption
    #   'find-and-replace:toggle-selection-option': @toggleSelectionOption
    #   'find-and-replace:toggle-whole-word-option': @toggleWholeWordOption
    #
    # @subscriptions.add @model.onDidUpdate @markersUpdated
    # @subscriptions.add @model.onDidError @findError
    # @subscriptions.add @model.getFindOptions().onDidChange @updateOptionViews
    #
    # @regexOptionButton.on 'click', @toggleRegexOption
    # @caseOptionButton.on 'click', @toggleCaseOption
    # @selectionOptionButton.on 'click', @toggleSelectionOption
    # @wholeWordOptionButton.on 'click', @toggleWholeWordOption
    #
    # @on 'focus', => @findEditor.focus()
    # @find('button').on 'click', ->
    #   workspaceElement = atom.views.getView(atom.workspace)
    #   workspaceElement.focus()

  handleFindEvents: ->
    # @findEditor.getModel().onDidStopChanging => @liveSearch()
    # @nextButton.on 'click', (e) => if e.shiftKey then @findPrevious(focusEditorAfter: true) else @findNext(focusEditorAfter: true)
    # @subscriptions.add atom.commands.add 'atom-workspace',
    #   'find-and-replace:find-next': => @findNext(focusEditorAfter: true)
    #   'find-and-replace:find-previous': => @findPrevious(focusEditorAfter: true)
    #   'find-and-replace:find-next-selected': @findNextSelected
    #   'find-and-replace:find-previous-selected': @findPreviousSelected
    #   'find-and-replace:use-selection-as-find-pattern': @setSelectionAsFindPattern

  focusFindEditor: =>
    selectedText = atom.workspace.getActiveTextEditor()?.getSelectedText?()
    if selectedText and selectedText.indexOf('\n') < 0
      selectedText = Util.escapeRegex(selectedText) if @model.getFindOptions().useRegex
      @findEditor.setText(selectedText)
    @findEditor.focus()
    @findEditor.getModel().selectAll()

  toggleFocus: =>
    # if @findEditor.hasClass('is-focused')
    #   @replaceEditor.focus()
    # else
    #   @findEditor.focus()

  confirm: ->
    # @findNext(focusEditorAfter: atom.config.get('find-and-replace.focusEditorAfterSearch'))

  liveSearch: ->
    # findPattern = @findEditor.getText()
    # if findPattern.length is 0 or findPattern.length >= atom.config.get('find-and-replace.liveSearchMinimumCharacters')
    #   @search(findPattern)

  query: (jqPattern, options) ->
    # if arguments.length is 1 and typeof findPattern is 'object'
    #   options = findPattern
    #   findPattern = null
    # findPattern ?= @findEditor.getText()
    # @model.search(findPattern, options)

  findError: (error) =>
    @setErrorMessage(error.message)

  setInfoMessage: (infoMessage) ->
    @descriptionLabel.text(infoMessage).removeClass('text-error')

  setErrorMessage: (errorMessage) ->
    @descriptionLabel.text(errorMessage).addClass('text-error')

  clearMessage: ->
    @descriptionLabel.html('Find in Current Buffer <span class="subtle-info-message">Close this panel with the <span class="highlight">esc</span> key</span>').removeClass('text-error')

  updateOptionViews: =>
    @updateOptionButtons()
    @updateOptionsLabel()
    @updateSyntaxHighlighting()

  updateSyntaxHighlighting: ->
  #   if @model.getFindOptions().useRegex
  #     @findEditor.getModel().setGrammar(atom.grammars.grammarForScopeName('source.js.regexp'))
  #     @replaceEditor.getModel().setGrammar(atom.grammars.grammarForScopeName('source.js.regexp.replacement'))
  #   else
  #     @findEditor.getModel().setGrammar(atom.grammars.nullGrammar)
  #     @replaceEditor.getModel().setGrammar(atom.grammars.nullGrammar)

  updateOptionButtons: ->
    # @setOptionButtonState(@regexOptionButton, @model.getFindOptions().useRegex)
    # @setOptionButtonState(@caseOptionButton, @model.getFindOptions().caseSensitive)
    # @setOptionButtonState(@selectionOptionButton, @model.getFindOptions().inCurrentSelection)
    # @setOptionButtonState(@wholeWordOptionButton, @model.getFindOptions().wholeWord)

  updateOptionsLabel: ->
    # label = []
    # label.push('Regex') if @model.getFindOptions().useRegex
    # if @model.getFindOptions().caseSensitive
    #   label.push('Case Sensitive')
    # else
    #   label.push('Case Insensitive')
    # label.push('Within Current Selection') if @model.getFindOptions().inCurrentSelection
    # label.push('Whole Word') if @model.getFindOptions().wholeWord
    # @optionsLabel.text(label.join(', '))

  setOptionButtonState: (optionButton, selected) ->
    if selected
      optionButton.addClass 'selected'
    else
      optionButton.removeClass 'selected'

  toggleHighlightOption: =>
    # @search(caseSensitive: not @model.getFindOptions().caseSensitive)
    # @selectFirstMarkerAfterCursor() unless @anyMarkersAreSelected()
