import type * as monaco from "monaco-editor";
const defineConfig = (json: monaco.editor.IStandaloneThemeData) => json;
export default defineConfig({
  "inherit": false,
  "base": "vs-dark",
  "colors": {
    "focusBorder": "#2188ff",
    "foreground": "#444d56",
    "descriptionForeground": "#6a737d",
    "errorForeground": "#cb2431",
    "textLink.foreground": "#0366d6",
    "textLink.activeForeground": "#005cc5",
    "textBlockQuote.background": "#fafbfc",
    "textBlockQuote.border": "#e1e4e8",
    "textCodeBlock.background": "#f6f8fa",
    "textPreformat.foreground": "#586069",
    "textSeparator.foreground": "#d1d5da",
    "button.background": "#159739",
    "button.foreground": "#fff",
    "button.hoverBackground": "#138934",
    "checkbox.background": "#fafbfc",
    "checkbox.border": "#d1d5da",
    "dropdown.background": "#fafbfc",
    "dropdown.border": "#e1e4e8",
    "dropdown.foreground": "#2f363d",
    "dropdown.listBackground": "#fff",
    "input.background": "#fafbfc",
    "input.border": "#e1e4e8",
    "input.foreground": "#2f363d",
    "input.placeholderForeground": "#959da5",
    "badge.foreground": "#005cc5",
    "badge.background": "#dbedff",
    "progressBar.background": "#2188ff",
    "titleBar.activeForeground": "#2f363d",
    "titleBar.activeBackground": "#fff",
    "titleBar.inactiveForeground": "#6a737d",
    "titleBar.inactiveBackground": "#f6f8fa",
    "titleBar.border": "#e1e4e8",
    "activityBar.foreground": "#2f363d",
    "activityBar.inactiveForeground": "#959da5",
    "activityBar.background": "#fff",
    "activityBarBadge.foreground": "#fff",
    "activityBarBadge.background": "#2188ff",
    "activityBar.activeBorder": "#f9826c",
    "activityBar.border": "#e1e4e8",
    "sideBar.foreground": "#586069",
    "sideBar.background": "#f6f8fa",
    "sideBar.border": "#e1e4e8",
    "sideBarTitle.foreground": "#2f363d",
    "sideBarSectionHeader.foreground": "#2f363d",
    "sideBarSectionHeader.background": "#f6f8fa",
    "sideBarSectionHeader.border": "#e1e4e8",
    "list.hoverForeground": "#2f363d",
    "list.inactiveSelectionForeground": "#2f363d",
    "list.activeSelectionForeground": "#2f363d",
    "list.hoverBackground": "#ebf0f4",
    "list.inactiveSelectionBackground": "#e8eaed",
    "list.activeSelectionBackground": "#e2e5e9",
    "list.inactiveFocusBackground": "#dbedff",
    "list.focusBackground": "#cce5ff",
    "tree.indentGuidesStroke": "#e1e4e8",
    "notificationCenterHeader.foreground": "#6a737d",
    "notificationCenterHeader.background": "#e1e4e8",
    "notifications.foreground": "#2f363d",
    "notifications.background": "#fafbfc",
    "notifications.border": "#e1e4e8",
    "notificationsErrorIcon.foreground": "#d73a49",
    "notificationsWarningIcon.foreground": "#e36209",
    "notificationsInfoIcon.foreground": "#005cc5",
    "pickerGroup.border": "#e1e4e8",
    "pickerGroup.foreground": "#2f363d",
    "quickInput.background": "#fafbfc",
    "quickInput.foreground": "#2f363d",
    "quickInputTitle.background": "#2f363d",
    "quickInput.list.focusBackground": "#9cc1e5",
    "statusBar.foreground": "#586069",
    "statusBar.background": "#fff",
    "statusBar.border": "#e1e4e8",
    "statusBar.noFolderBackground": "#fff",
    "statusBar.debuggingBackground": "#f9826c",
    "statusBar.debuggingForeground": "#fff",
    "editorGroupHeader.tabsBackground": "#f6f8fa",
    "editorGroupHeader.tabsBorder": "#e1e4e8",
    "editorGroup.border": "#e1e4e8",
    "tab.activeForeground": "#2f363d",
    "tab.inactiveForeground": "#6a737d",
    "tab.inactiveBackground": "#f6f8fa",
    "tab.activeBackground": "#fff",
    "tab.hoverBackground": "#fff",
    "tab.unfocusedHoverBackground": "#fff",
    "tab.border": "#e1e4e8",
    "tab.unfocusedActiveBorderTop": "#e1e4e8",
    "tab.activeBorder": "#fff",
    "tab.unfocusedActiveBorder": "#fff",
    "tab.activeBorderTop": "#f9826c",
    "breadcrumb.foreground": "#6a737d",
    "breadcrumb.focusForeground": "#2f363d",
    "breadcrumb.activeSelectionForeground": "#586069",
    "breadcrumbPicker.background": "#fafbfc",
    "editor.foreground": "#24292e",
    "editor.background": "#fff",
    "editorWidget.background": "#f6f8fa",
    "editor.foldBackground": "#fafbfc",
    "editor.lineHighlightBackground": "#f6f8fa",
    "editorLineNumber.foreground": "#1b1f234d",
    "editorLineNumber.activeForeground": "#24292e",
    "editorIndentGuide.background": "#eff2f6",
    "editorIndentGuide.activeBackground": "#d7dbe0",
    "editorWhitespace.foreground": "#d1d5da",
    "editorCursor.foreground": "#044289",
    "editor.findMatchBackground": "#ffdf5d",
    "editor.findMatchHighlightBackground": "#ffdf5d66",
    "editor.inactiveSelectionBackground": "#0366d611",
    "editor.selectionBackground": "#0366d625",
    "editor.selectionHighlightBackground": "#34d05840",
    "editor.selectionHighlightBorder": "#34d05800",
    "editor.wordHighlightBackground": "#34d05800",
    "editor.wordHighlightStrongBackground": "#34d05800",
    "editor.wordHighlightBorder": "#24943e99",
    "editor.wordHighlightStrongBorder": "#24943e50",
    "editorBracketMatch.background": "#34d05840",
    "editorBracketMatch.border": "#34d05800",
    "editorGutter.modifiedBackground": "#2188ff",
    "editorGutter.addedBackground": "#28a745",
    "editorGutter.deletedBackground": "#d73a49",
    "diffEditor.insertedTextBackground": "#34d05822",
    "diffEditor.removedTextBackground": "#d73a4922",
    "scrollbar.shadow": "#6a737d33",
    "scrollbarSlider.background": "#959da533",
    "scrollbarSlider.hoverBackground": "#959da544",
    "scrollbarSlider.activeBackground": "#959da588",
    "editorOverviewRuler.border": "#fff",
    "panel.background": "#f6f8fa",
    "panel.border": "#e1e4e8",
    "panelTitle.activeBorder": "#f9826c",
    "panelTitle.activeForeground": "#2f363d",
    "panelTitle.inactiveForeground": "#6a737d",
    "panelInput.border": "#e1e4e8",
    "terminal.foreground": "#586069",
    "gitDecoration.addedResourceForeground": "#28a745",
    "gitDecoration.modifiedResourceForeground": "#005cc5",
    "gitDecoration.deletedResourceForeground": "#d73a49",
    "gitDecoration.untrackedResourceForeground": "#28a745",
    "gitDecoration.ignoredResourceForeground": "#959da5",
    "gitDecoration.conflictingResourceForeground": "#e36209",
    "gitDecoration.submoduleResourceForeground": "#959da5",
    "debugToolBar.background": "#fff",
    "editor.stackFrameHighlightBackground": "#fffbdd",
    "editor.focusedStackFrameHighlightBackground": "#fff5b1",
    "settings.headerForeground": "#2f363d",
    "settings.modifiedItemIndicator": "#2188ff",
    "welcomePage.buttonBackground": "#f6f8fa",
    "welcomePage.buttonHoverBackground": "#e1e4e8"
  },
  "rules": [
    {
      "foreground": "#6a737d",
      "token": "comment"
    },
    {
      "foreground": "#6a737d",
      "token": "punctuation.definition.comment"
    },
    {
      "foreground": "#6a737d",
      "token": "string.comment"
    },
    {
      "foreground": "#005cc5",
      "token": "constant"
    },
    {
      "foreground": "#005cc5",
      "token": "entity.name.constant"
    },
    {
      "foreground": "#005cc5",
      "token": "variable.other.constant"
    },
    {
      "foreground": "#005cc5",
      "token": "variable.language"
    },
    {
      "foreground": "#6f42c1",
      "token": "entity"
    },
    {
      "foreground": "#6f42c1",
      "token": "entity.name"
    },
    {
      "foreground": "#24292e",
      "token": "variable.parameter.function"
    },
    {
      "foreground": "#22863a",
      "token": "entity.name.tag"
    },
    {
      "foreground": "#d73a49",
      "token": "keyword"
    },
    {
      "foreground": "#d73a49",
      "token": "storage"
    },
    {
      "foreground": "#d73a49",
      "token": "storage.type"
    },
    {
      "foreground": "#24292e",
      "token": "storage.modifier.package"
    },
    {
      "foreground": "#24292e",
      "token": "storage.modifier.import"
    },
    {
      "foreground": "#24292e",
      "token": "storage.type.java"
    },
    {
      "foreground": "#032f62",
      "token": "string"
    },
    {
      "foreground": "#032f62",
      "token": "punctuation.definition.string"
    },
    {
      "foreground": "#032f62",
      "token": "string punctuation.section.embedded source"
    },
    {
      "foreground": "#005cc5",
      "token": "support"
    },
    {
      "foreground": "#005cc5",
      "token": "meta.property-name"
    },
    {
      "foreground": "#e36209",
      "token": "variable"
    },
    {
      "foreground": "#24292e",
      "token": "variable.other"
    },
    {
      "fontStyle": "italic",
      "foreground": "#b31d28",
      "token": "invalid.broken"
    },
    {
      "fontStyle": "italic",
      "foreground": "#b31d28",
      "token": "invalid.deprecated"
    },
    {
      "fontStyle": "italic",
      "foreground": "#b31d28",
      "token": "invalid.illegal"
    },
    {
      "fontStyle": "italic",
      "foreground": "#b31d28",
      "token": "invalid.unimplemented"
    },
    {
      "fontStyle": "italic underline",
      "background": "#d73a49",
      "foreground": "#fafbfc",
      "content": "^M",
      "token": "carriage-return"
    },
    {
      "foreground": "#b31d28",
      "token": "message.error"
    },
    {
      "foreground": "#24292e",
      "token": "string source"
    },
    {
      "foreground": "#005cc5",
      "token": "string variable"
    },
    {
      "foreground": "#032f62",
      "token": "source.regexp"
    },
    {
      "foreground": "#032f62",
      "token": "string.regexp"
    },
    {
      "foreground": "#032f62",
      "token": "string.regexp.character-class"
    },
    {
      "foreground": "#032f62",
      "token": "string.regexp constant.character.escape"
    },
    {
      "foreground": "#032f62",
      "token": "string.regexp source.ruby.embedded"
    },
    {
      "foreground": "#032f62",
      "token": "string.regexp string.regexp.arbitrary-repitition"
    },
    {
      "fontStyle": "bold",
      "foreground": "#22863a",
      "token": "string.regexp constant.character.escape"
    },
    {
      "foreground": "#005cc5",
      "token": "support.constant"
    },
    {
      "foreground": "#005cc5",
      "token": "support.variable"
    },
    {
      "foreground": "#005cc5",
      "token": "meta.module-reference"
    },
    {
      "foreground": "#e36209",
      "token": "punctuation.definition.list.begin.markdown"
    },
    {
      "fontStyle": "bold",
      "foreground": "#005cc5",
      "token": "markup.heading"
    },
    {
      "fontStyle": "bold",
      "foreground": "#005cc5",
      "token": "markup.heading entity.name"
    },
    {
      "foreground": "#22863a",
      "token": "markup.quote"
    },
    {
      "fontStyle": "italic",
      "foreground": "#24292e",
      "token": "markup.italic"
    },
    {
      "fontStyle": "bold",
      "foreground": "#24292e",
      "token": "markup.bold"
    },
    {
      "foreground": "#005cc5",
      "token": "markup.raw"
    },
    {
      "background": "#ffeef0",
      "foreground": "#b31d28",
      "token": "markup.deleted"
    },
    {
      "background": "#ffeef0",
      "foreground": "#b31d28",
      "token": "meta.diff.header.from-file"
    },
    {
      "background": "#ffeef0",
      "foreground": "#b31d28",
      "token": "punctuation.definition.deleted"
    },
    {
      "background": "#f0fff4",
      "foreground": "#22863a",
      "token": "markup.inserted"
    },
    {
      "background": "#f0fff4",
      "foreground": "#22863a",
      "token": "meta.diff.header.to-file"
    },
    {
      "background": "#f0fff4",
      "foreground": "#22863a",
      "token": "punctuation.definition.inserted"
    },
    {
      "background": "#ffebda",
      "foreground": "#e36209",
      "token": "markup.changed"
    },
    {
      "background": "#ffebda",
      "foreground": "#e36209",
      "token": "punctuation.definition.changed"
    },
    {
      "foreground": "#f6f8fa",
      "background": "#005cc5",
      "token": "markup.ignored"
    },
    {
      "foreground": "#f6f8fa",
      "background": "#005cc5",
      "token": "markup.untracked"
    },
    {
      "foreground": "#6f42c1",
      "fontStyle": "bold",
      "token": "meta.diff.range"
    },
    {
      "foreground": "#005cc5",
      "token": "meta.diff.header"
    },
    {
      "fontStyle": "bold",
      "foreground": "#005cc5",
      "token": "meta.separator"
    },
    {
      "foreground": "#005cc5",
      "token": "meta.output"
    },
    {
      "foreground": "#586069",
      "token": "brackethighlighter.tag"
    },
    {
      "foreground": "#586069",
      "token": "brackethighlighter.curly"
    },
    {
      "foreground": "#586069",
      "token": "brackethighlighter.round"
    },
    {
      "foreground": "#586069",
      "token": "brackethighlighter.square"
    },
    {
      "foreground": "#586069",
      "token": "brackethighlighter.angle"
    },
    {
      "foreground": "#586069",
      "token": "brackethighlighter.quote"
    },
    {
      "foreground": "#b31d28",
      "token": "brackethighlighter.unmatched"
    },
    {
      "foreground": "#032f62",
      "fontStyle": "underline",
      "token": "constant.other.reference.link"
    },
    {
      "foreground": "#032f62",
      "fontStyle": "underline",
      "token": "string.other.link"
    }
  ],
  "encodedTokensColors": []
});