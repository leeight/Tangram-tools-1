var data = {"packages":[{"packageName":"baidu","functions":["baidu.fx","baidu.ui"]},{"packageName":"baidu.fx","functions":["baidu.fx.collapse","baidu.fx.create","baidu.fx.current","baidu.fx.expand","baidu.fx.fadeIn","baidu.fx.fadeOut","baidu.fx.getTransition","baidu.fx.highlight","baidu.fx.mask","baidu.fx.move","baidu.fx.moveBy","baidu.fx.moveTo","baidu.fx.opacity","baidu.fx.puff","baidu.fx.pulsate","baidu.fx.remove","baidu.fx.scale","baidu.fx.scrollBy","baidu.fx.scrollTo","baidu.fx.shake","baidu.fx.Timeline","baidu.fx.zoomIn","baidu.fx.zoomOut"]},{"packageName":"baidu.ui","functions":["baidu.ui.Base","baidu.ui.behavior","baidu.ui.button","baidu.ui.create","baidu.ui.createUI","baidu.ui.decorator","baidu.ui.dialog","baidu.ui.get","baidu.ui.menubar","baidu.ui.modal","baidu.ui.smartCover","baidu.ui.smartPosition","baidu.ui.suggestion","baidu.ui.tooltip"]},{"packageName":"baidu.ui.Base","functions":["baidu.ui.Base.getParent","baidu.ui.Base.setParent"]},{"packageName":"baidu.ui.behavior","functions":["baidu.ui.behavior.decorator","baidu.ui.behavior.draggable","baidu.ui.behavior.droppable","baidu.ui.behavior.resizable","baidu.ui.behavior.statable","baidu.ui.behavior.switchable"]},{"packageName":"baidu.ui.behavior.statable","functions":["baidu.ui.behavior.statable.setStateHandler"]},{"packageName":"baidu.ui.button","functions":["baidu.ui.button.Button","baidu.ui.button.create","baidu.ui.button.setup"]},{"packageName":"baidu.ui.decorator","functions":["baidu.ui.decorator.create","baidu.ui.decorator.Decorator"]},{"packageName":"baidu.ui.dialog","functions":["baidu.ui.dialog.alert","baidu.ui.dialog.confirm","baidu.ui.dialog.create","baidu.ui.dialog.Dialog$button","baidu.ui.dialog.Dialog$closeButton","baidu.ui.dialog.Dialog$draggable","baidu.ui.dialog.Dialog$keyboard","baidu.ui.dialog.Dialog$modal","baidu.ui.dialog.Dialog$resizable","baidu.ui.dialog.Dialog$smartCover","baidu.ui.dialog.Dialog","baidu.ui.dialog.iframe","baidu.ui.dialog.login"]},{"packageName":"baidu.ui.menubar","functions":["baidu.ui.menubar.click","baidu.ui.menubar.create","baidu.ui.menubar.hover","baidu.ui.menubar.Menubar$click","baidu.ui.menubar.Menubar$fx","baidu.ui.menubar.Menubar$hover","baidu.ui.menubar.Menubar$icon","baidu.ui.menubar.Menubar"]},{"packageName":"baidu.ui.modal","functions":["baidu.ui.modal.create","baidu.ui.modal.Modal"]},{"packageName":"baidu.ui.smartPosition","functions":["baidu.ui.smartPosition.element","baidu.ui.smartPosition.mouse","baidu.ui.smartPosition.set","baidu.ui.smartPosition.setBorderBoxStyles","baidu.ui.smartPosition.SmartPosition"]},{"packageName":"baidu.ui.suggestion","functions":["baidu.ui.suggestion.create","baidu.ui.suggestion.Suggestion$data","baidu.ui.suggestion.Suggestion$fixWidth","baidu.ui.suggestion.Suggestion$input","baidu.ui.suggestion.Suggestion$smartCover","baidu.ui.suggestion.Suggestion"]},{"packageName":"baidu.ui.tooltip","functions":["baidu.ui.tooltip.click","baidu.ui.tooltip.create","baidu.ui.tooltip.hover","baidu.ui.tooltip.Tooltip$fx","baidu.ui.tooltip.Tooltip"]}],"functions":{"baidu.fx.collapse":{"status":"0","doc":"baidu_fx_collapse.html","description":null,"dependencies":["baidu.dom.g","baidu.dom.hide","baidu.object.extend","baidu.fx.create"],"ui_dependencies":["baidu.dom.g","baidu.dom.hide","baidu.object.extend"]},"baidu.fx.create":{"status":"0","doc":"baidu_fx_create.html","description":null,"dependencies":["baidu.lang.Event","baidu.fx.Timeline"],"ui_dependencies":["baidu.lang.Event"]},"baidu.fx.current":{"status":"0","doc":"baidu_fx_current.html","description":null,"dependencies":["baidu.fx","baidu.dom.g"],"ui_dependencies":["baidu.dom.g"]},"baidu.fx.expand":{"status":"0","doc":"baidu_fx_expand.html","description":null,"dependencies":["baidu.fx.create","baidu.dom.g","baidu.dom.show","baidu.object.extend","baidu.array.each","baidu.dom.getStyle","baidu.lang.isNumber"],"ui_dependencies":["baidu.dom.g","baidu.dom.show","baidu.object.extend","baidu.array.each","baidu.dom.getStyle","baidu.lang.isNumber"]},"baidu.fx.fadeIn":{"status":"0","doc":"baidu_fx_fadeIn.html","description":null,"dependencies":["baidu.dom.g","baidu.fx.opacity"],"ui_dependencies":["baidu.dom.g"]},"baidu.fx.fadeOut":{"status":"0","doc":"baidu_fx_fadeOut.html","description":null,"dependencies":["baidu.dom.g","baidu.dom.hide","baidu.fx.opacity"],"ui_dependencies":["baidu.dom.g","baidu.dom.hide"]},"baidu.fx.getTransition":{"status":"0","doc":"baidu_fx_getTransition.html","description":null,"dependencies":["baidu.fx"],"ui_dependencies":[]},"baidu.fx.highlight":{"status":"0","doc":"baidu_fx_highlight.html","description":null,"dependencies":["baidu.fx.create","baidu.dom.g","baidu.dom.getStyle","baidu.object.extend","baidu.string.formatColor"],"ui_dependencies":["baidu.dom.g","baidu.dom.getStyle","baidu.object.extend","baidu.string.formatColor"]},"baidu.fx.mask":{"status":"0","doc":"baidu_fx_mask.html","description":null,"dependencies":["baidu.dom.getStyle","baidu.object.extend","baidu.fx.create"],"ui_dependencies":["baidu.dom.getStyle","baidu.object.extend"]},"baidu.fx.move":{"status":"0","doc":"baidu_fx_move.html","description":null,"dependencies":["baidu.dom.g","baidu.fx.create","baidu.object.extend","baidu.dom.getStyle"],"ui_dependencies":["baidu.dom.g","baidu.object.extend","baidu.dom.getStyle"]},"baidu.fx.moveBy":{"status":"0","doc":"baidu_fx_moveBy.html","description":null,"dependencies":["baidu.dom.g","baidu.fx.move","baidu.object.extend","baidu.dom.getStyle"],"ui_dependencies":["baidu.dom.g","baidu.object.extend","baidu.dom.getStyle"]},"baidu.fx.moveTo":{"status":"0","doc":"baidu_fx_moveTo.html","description":null,"dependencies":["baidu.dom.g","baidu.fx.move","baidu.object.extend","baidu.dom.getStyle"],"ui_dependencies":["baidu.dom.g","baidu.object.extend","baidu.dom.getStyle"]},"baidu.fx.opacity":{"status":"0","doc":"baidu_fx_opacity.html","description":null,"dependencies":["baidu.dom.g","baidu.dom.show","baidu.browser.ie","baidu.object.extend","baidu.fx.create"],"ui_dependencies":["baidu.dom.g","baidu.dom.show","baidu.browser.ie","baidu.object.extend"]},"baidu.fx.puff":{"status":"0","doc":"baidu_fx_puff.html","description":null,"dependencies":["baidu.fx.zoomOut","baidu.object.extend"],"ui_dependencies":["baidu.object.extend"]},"baidu.fx.pulsate":{"status":"0","doc":"baidu_fx_pulsate.html","description":null,"dependencies":["baidu.dom.g","baidu.object.extend","baidu.fx.create"],"ui_dependencies":["baidu.dom.g","baidu.object.extend"]},"baidu.fx.remove":{"status":"0","doc":"baidu_fx_remove.html","description":null,"dependencies":["baidu.fx.fadeOut","baidu.dom.remove","baidu.object.extend"],"ui_dependencies":["baidu.dom.remove","baidu.object.extend"]},"baidu.fx.scale":{"status":"0","doc":"baidu_fx_scale.html","description":null,"dependencies":["baidu.dom.g","baidu.dom.show","baidu.browser.ie","baidu.dom.getStyle","baidu.object.extend","baidu.fx.create"],"ui_dependencies":["baidu.dom.g","baidu.dom.show","baidu.browser.ie","baidu.dom.getStyle","baidu.object.extend"]},"baidu.fx.scrollBy":{"status":"0","doc":"baidu_fx_scrollBy.html","description":null,"dependencies":["baidu.dom.g","baidu.fx.create","baidu.object.extend"],"ui_dependencies":["baidu.dom.g","baidu.object.extend"]},"baidu.fx.scrollTo":{"status":"0","doc":"baidu_fx_scrollTo.html","description":null,"dependencies":["baidu.dom.g","baidu.fx.scrollBy"],"ui_dependencies":["baidu.dom.g"]},"baidu.fx.shake":{"status":"0","doc":"baidu_fx_shake.html","description":null,"dependencies":["baidu.dom","baidu.object.extend","baidu.dom.getStyle","baidu.fx.create"],"ui_dependencies":["baidu.dom","baidu.object.extend","baidu.dom.getStyle"]},"baidu.fx.Timeline":{"status":"0","doc":"baidu_fx_Timeline.html","description":null,"dependencies":["baidu.fx","baidu.lang.Event","baidu.lang.createClass","baidu.object.extend"],"ui_dependencies":["baidu.lang.Event","baidu.lang.createClass","baidu.object.extend"]},"baidu.fx.zoomIn":{"status":"0","doc":"baidu_fx_zoomIn.html","description":null,"dependencies":["baidu.dom.g","baidu.object.extend","baidu.fx.scale"],"ui_dependencies":["baidu.dom.g","baidu.object.extend"]},"baidu.fx.zoomOut":{"status":"0","doc":"baidu_fx_zoomOut.html","description":null,"dependencies":["baidu.dom.g","baidu.dom.hide","baidu.object.extend","baidu.fx.scale"],"ui_dependencies":["baidu.dom.g","baidu.dom.hide","baidu.object.extend"]},"baidu.fx":{"status":"0","doc":"baidu_fx.html","description":null,"dependencies":["baidu"],"ui_dependencies":["baidu"]},"baidu.ui.Base.getParent":{"status":"0","doc":"baidu_ui_Base_getParent.html","description":null,"dependencies":["baidu.ui.Base"],"ui_dependencies":[]},"baidu.ui.Base.setParent":{"status":"0","doc":"baidu_ui_Base_setParent.html","description":null,"dependencies":["baidu.ui.Base"],"ui_dependencies":[]},"baidu.ui.Base":{"status":"0","doc":"baidu_ui_Base.html","description":null,"dependencies":["baidu.ui","baidu.ui.create","baidu.dom.g","baidu.lang.Class","baidu.lang.Event"],"ui_dependencies":["baidu.dom.g","baidu.lang.Class","baidu.lang.Event"]},"baidu.ui.behavior.decorator":{"status":"0","doc":"baidu_ui_behavior_decorator.html","description":null,"dependencies":["baidu.ui.behavior","baidu.ui.decorator.create","baidu.lang.isString"],"ui_dependencies":["baidu.lang.isString"]},"baidu.ui.behavior.draggable":{"status":"0","doc":"baidu_ui_behavior_draggable.html","description":null,"dependencies":["baidu.ui.behavior","baidu.dom.drag","baidu.dom.getStyle"],"ui_dependencies":["baidu.dom.drag","baidu.dom.getStyle"]},"baidu.ui.behavior.droppable":{"status":"0","doc":"baidu_ui_behavior_droppable.html","description":null,"dependencies":["baidu.ui.behavior","baidu.dom.droppable"],"ui_dependencies":["baidu.dom.droppable"]},"baidu.ui.behavior.resizable":{"status":"0","doc":"baidu_ui_behavior_resizable.html","description":null,"dependencies":["baidu.ui.behavior","baidu.dom.resizable"],"ui_dependencies":["baidu.dom.resizable"]},"baidu.ui.behavior.statable.setStateHandler":{"status":"0","doc":"baidu_ui_behavior_statable_setStateHandler.html","description":null,"dependencies":["baidu.ui.behavior.statable","baidu.object.extend"],"ui_dependencies":["baidu.object.extend"]},"baidu.ui.behavior.statable":{"status":"0","doc":"baidu_ui_behavior_statable.html","description":null,"dependencies":["baidu.ui.behavior","baidu.dom.addClass","baidu.dom.removeClass","baidu.dom.hasClass","baidu.event.getTarget","baidu.event.on","baidu.event.un","baidu.array.each","baidu.object.each","baidu.fn.bind"],"ui_dependencies":["baidu.dom.addClass","baidu.dom.removeClass","baidu.dom.hasClass","baidu.event.getTarget","baidu.event.on","baidu.event.un","baidu.array.each","baidu.object.each","baidu.fn.bind"]},"baidu.ui.behavior.switchable":{"status":"0","doc":"baidu_ui_behavior_switchable.html","description":null,"dependencies":["baidu.ui.behavior","baidu.event.on","baidu.event.un","baidu.event.getTarget","baidu.array.each"],"ui_dependencies":["baidu.event.on","baidu.event.un","baidu.event.getTarget","baidu.array.each"]},"baidu.ui.behavior":{"status":"0","doc":"baidu_ui_behavior.html","description":null,"dependencies":["baidu.ui"],"ui_dependencies":[]},"baidu.ui.button.Button":{"status":"0","doc":"baidu_ui_button_Button.html","description":null,"dependencies":["baidu.ui.createUI","baidu.ui.Base.setParent","baidu.ui.Base.getParent","baidu.object.extend","baidu.string.format","baidu.dom.g","baidu.dom.removeClass","baidu.dom.addClass","baidu.dom.insertHTML","baidu.dom.remove","baidu.ui.button","baidu.ui.behavior.statable"],"ui_dependencies":["baidu.object.extend","baidu.string.format","baidu.dom.g","baidu.dom.removeClass","baidu.dom.addClass","baidu.dom.insertHTML","baidu.dom.remove"]},"baidu.ui.button.create":{"status":"0","doc":"baidu_ui_button_create.html","description":null,"dependencies":["baidu.ui.button","baidu.ui.button.Button","baidu.dom.g"],"ui_dependencies":["baidu.dom.g"]},"baidu.ui.button.setup":{"status":"0","doc":"baidu_ui_button_setup.html","description":null,"dependencies":["baidu.ui.button.Button","baidu.dom.insertAfter","baidu.dom.remove","baidu.dom.create"],"ui_dependencies":["baidu.dom.insertAfter","baidu.dom.remove","baidu.dom.create"]},"baidu.ui.button":{"status":"0","doc":"baidu_ui_button.html","description":null,"dependencies":["baidu.ui"],"ui_dependencies":[]},"baidu.ui.create":{"status":"0","doc":"baidu_ui_create.html","description":null,"dependencies":["baidu.ui","baidu.object.extend"],"ui_dependencies":["baidu.object.extend"]},"baidu.ui.createUI":{"status":"0","doc":"baidu_ui_createUI.html","description":null,"dependencies":["baidu.ui","baidu.ui.Base","baidu.object.extend"],"ui_dependencies":["baidu.object.extend"]},"baidu.ui.decorator.create":{"status":"0","doc":"baidu_ui_decorator_create.html","description":null,"dependencies":["baidu.ui","baidu.ui.decorator","baidu.ui.decorator.Decorator"],"ui_dependencies":[]},"baidu.ui.decorator.Decorator":{"status":"0","doc":"baidu_ui_decorator_Decorator.html","description":null,"dependencies":["baidu.ui","baidu.ui.createUI","baidu.ui.decorator","baidu.dom.insertBefore","baidu.dom.children","baidu.array.each"],"ui_dependencies":["baidu.dom.insertBefore","baidu.dom.children","baidu.array.each"]},"baidu.ui.decorator":{"status":"0","doc":"baidu_ui_decorator.html","description":null,"dependencies":["baidu.ui"],"ui_dependencies":[]},"baidu.ui.dialog.alert":{"status":"0","doc":"baidu_ui_dialog_alert.html","description":null,"dependencies":["baidu.ui.dialog","baidu.ui.dialog.Dialog","baidu.ui.dialog.Dialog$button","baidu.lang.isString","baidu.ui.dialog.Dialog$keyboard"],"ui_dependencies":["baidu.lang.isString"]},"baidu.ui.dialog.confirm":{"status":"0","doc":"baidu_ui_dialog_confirm.html","description":null,"dependencies":["baidu.ui.dialog","baidu.ui.dialog.Dialog","baidu.ui.dialog.Dialog$button","baidu.ui.dialog.Dialog$keyboard","baidu.lang.isString","baidu.object.extend"],"ui_dependencies":["baidu.lang.isString","baidu.object.extend"]},"baidu.ui.dialog.create":{"status":"0","doc":"baidu_ui_dialog_create.html","description":null,"dependencies":["baidu.ui.dialog","baidu.ui.dialog.Dialog"],"ui_dependencies":[]},"baidu.ui.dialog.Dialog$button":{"status":"0","doc":"baidu_ui_dialog_Dialog$button.html","description":null,"dependencies":["baidu.ui.dialog","baidu.ui.dialog.Dialog","baidu.ui.button.Button","baidu.object.each"],"ui_dependencies":["baidu.object.each"]},"baidu.ui.dialog.Dialog$closeButton":{"status":"0","doc":"baidu_ui_dialog_Dialog$closeButton.html","description":null,"dependencies":["baidu.ui.dialog.Dialog","baidu.dom.insertHTML","baidu.ui.button.Button","baidu.event.stopPropagation"],"ui_dependencies":["baidu.dom.insertHTML","baidu.event.stopPropagation"]},"baidu.ui.dialog.Dialog$draggable":{"status":"0","doc":"baidu_ui_dialog_Dialog$draggable.html","description":null,"dependencies":["baidu.ui.dialog.Dialog","baidu.dom.draggable","baidu.page.getWidth","baidu.page.getHeight","baidu.event.on","baidu.event.un","baidu.ui.behavior.draggable"],"ui_dependencies":["baidu.dom.draggable","baidu.page.getWidth","baidu.page.getHeight","baidu.event.on","baidu.event.un"]},"baidu.ui.dialog.Dialog$keyboard":{"status":"0","doc":"baidu_ui_dialog_Dialog$keyboard.html","description":null,"dependencies":["baidu.ui.dialog.Dialog","baidu.lang.instance","baidu.object.each","baidu.event.on","baidu.event.un"],"ui_dependencies":["baidu.lang.instance","baidu.object.each","baidu.event.on","baidu.event.un"]},"baidu.ui.dialog.Dialog$modal":{"status":"0","doc":"baidu_ui_dialog_Dialog$modal.html","description":null,"dependencies":["baidu.ui.dialog.Dialog","baidu.ui.modal.create","baidu.ui.modal"],"ui_dependencies":[]},"baidu.ui.dialog.Dialog$resizable":{"status":"0","doc":"baidu_ui_dialog_Dialog$resizable.html","description":null,"dependencies":["baidu.ui.dialog.Dialog","baidu.event.on","baidu.event.un","baidu.dom.resizable","baidu.ui.behavior.resizable"],"ui_dependencies":["baidu.event.on","baidu.event.un","baidu.dom.resizable"]},"baidu.ui.dialog.Dialog$smartCover":{"status":"0","doc":"baidu_ui_dialog_Dialog$smartCover.html","description":null,"dependencies":["baidu.ui.dialog.Dialog","baidu.ui.smartCover"],"ui_dependencies":[]},"baidu.ui.dialog.Dialog":{"status":"0","doc":"baidu_ui_dialog_Dialog.html","description":null,"dependencies":["baidu.ui.createUI","baidu.page.getViewWidth","baidu.page.getViewHeight","baidu.page.getScrollLeft","baidu.page.getScrollTop","baidu.event.on","baidu.event.un","baidu.object.extend","baidu.dom.g","baidu.dom.remove","baidu.dom.setStyles","baidu.dom.getStyle","baidu.dom._styleFilter.px","baidu.ui.smartPosition.setBorderBoxStyles","baidu.array.each","baidu.string.format","baidu.browser","baidu.lang.isNumber","baidu.ui.dialog"],"ui_dependencies":["baidu.page.getViewWidth","baidu.page.getViewHeight","baidu.page.getScrollLeft","baidu.page.getScrollTop","baidu.event.on","baidu.event.un","baidu.object.extend","baidu.dom.g","baidu.dom.remove","baidu.dom.setStyles","baidu.dom.getStyle","baidu.dom._styleFilter.px","baidu.array.each","baidu.string.format","baidu.browser","baidu.lang.isNumber"]},"baidu.ui.dialog.iframe":{"status":"0","doc":"baidu_ui_dialog_iframe.html","description":null,"dependencies":["baidu.ui.dialog","baidu.ui.dialog.Dialog","baidu.string.format","baidu.browser.ie"],"ui_dependencies":["baidu.string.format","baidu.browser.ie"]},"baidu.ui.dialog.login":{"status":"0","doc":"baidu_ui_dialog_login.html","description":null,"dependencies":["baidu.ui.dialog","baidu.ui.dialog.Dialog","baidu.dom.addClass","baidu.dom.removeClass","baidu.dom.g","baidu.dom.children","baidu.object.extend","baidu.sio.callByBrowser","baidu.sio.callByServer"],"ui_dependencies":["baidu.dom.addClass","baidu.dom.removeClass","baidu.dom.g","baidu.dom.children","baidu.object.extend","baidu.sio.callByBrowser","baidu.sio.callByServer"]},"baidu.ui.dialog":{"status":"0","doc":"baidu_ui_dialog.html","description":null,"dependencies":["baidu.ui"],"ui_dependencies":[]},"baidu.ui.get":{"status":"0","doc":"baidu_ui_get.html","description":null,"dependencies":["baidu.ui","baidu.lang.isString","baidu.lang.instance","baidu.dom.getAttr"],"ui_dependencies":["baidu.lang.isString","baidu.lang.instance","baidu.dom.getAttr"]},"baidu.ui.menubar.click":{"status":"0","doc":"baidu_ui_menubar_click.html","description":null,"dependencies":["baidu.ui.menubar.Menubar","baidu.ui.create","baidu.ui.menubar.Menubar$click","baidu.dom.g"],"ui_dependencies":["baidu.dom.g"]},"baidu.ui.menubar.create":{"status":"0","doc":"baidu_ui_menubar_create.html","description":null,"dependencies":["baidu.ui.menubar","baidu.ui.menubar.Menubar"],"ui_dependencies":[]},"baidu.ui.menubar.hover":{"status":"0","doc":"baidu_ui_menubar_hover.html","description":null,"dependencies":["baidu.ui.menubar.Menubar","baidu.ui.create","baidu.ui.menubar.Menubar$hover","baidu.dom.g"],"ui_dependencies":["baidu.dom.g"]},"baidu.ui.menubar.Menubar$click":{"status":"0","doc":"baidu_ui_menubar_Menubar$click.html","description":null,"dependencies":["baidu.ui.menubar","baidu.ui.get","baidu.event.on","baidu.event.un","baidu.event.getTarget","baidu.dom.getAncestorBy","baidu.object.extend","baidu.fn.bind"],"ui_dependencies":["baidu.event.on","baidu.event.un","baidu.event.getTarget","baidu.dom.getAncestorBy","baidu.object.extend","baidu.fn.bind"]},"baidu.ui.menubar.Menubar$fx":{"status":"0","doc":"baidu_ui_menubar_Menubar$fx.html","description":null,"dependencies":["baidu.ui.menubar.Menubar","baidu.fx.expand","baidu.fx.collapse","baidu.dom.g"],"ui_dependencies":["baidu.dom.g"]},"baidu.ui.menubar.Menubar$hover":{"status":"0","doc":"baidu_ui_menubar_Menubar$hover.html","description":null,"dependencies":["baidu.ui.menubar","baidu.event.on","baidu.event.un","baidu.dom.g","baidu.object.extend","baidu.fn.bind"],"ui_dependencies":["baidu.event.on","baidu.event.un","baidu.dom.g","baidu.object.extend","baidu.fn.bind"]},"baidu.ui.menubar.Menubar$icon":{"status":"0","doc":"baidu_ui_menubar_Menubar$icon.html","description":null,"dependencies":["baidu.ui.menubar.Menubar","baidu.object.extend","baidu.string.format","baidu.object.each","baidu.dom.insertHTML"],"ui_dependencies":["baidu.object.extend","baidu.string.format","baidu.object.each","baidu.dom.insertHTML"]},"baidu.ui.menubar.Menubar":{"status":"0","doc":"baidu_ui_menubar_Menubar.html","description":null,"dependencies":["baidu.ui.menubar","baidu.ui.createUI","baidu.lang.Event","baidu.object.extend","baidu.object.each","baidu.dom.g","baidu.dom.remove","baidu.dom.setStyles","baidu.dom.addClass","baidu.dom.removeClass","baidu.ui.smartPosition.element","baidu.string.format","baidu.array.each","baidu.lang.isFunction"],"ui_dependencies":["baidu.lang.Event","baidu.object.extend","baidu.object.each","baidu.dom.g","baidu.dom.remove","baidu.dom.setStyles","baidu.dom.addClass","baidu.dom.removeClass","baidu.string.format","baidu.array.each","baidu.lang.isFunction"]},"baidu.ui.menubar":{"status":"0","doc":"baidu_ui_menubar.html","description":null,"dependencies":["baidu.ui"],"ui_dependencies":[]},"baidu.ui.modal.create":{"status":"0","doc":"baidu_ui_modal_create.html","description":null,"dependencies":["baidu.ui.modal.Modal"],"ui_dependencies":[]},"baidu.ui.modal.Modal":{"status":"0","doc":"baidu_ui_modal_Modal.html","description":null,"dependencies":["baidu.ui.createUI","baidu.ui.modal","baidu.ui.smartCover","baidu.dom.setAttr","baidu.dom.setStyles","baidu.dom._styleFilter.px","baidu.dom._styleFixer.opacity","baidu.string.format","baidu.browser.ie","baidu.event.on","baidu.event.un","baidu.page.getViewWidth","baidu.page.getViewHeight","baidu.page.getScrollLeft","baidu.page.getScrollTop","baidu.lang.isNumber","baidu.object.each","baidu.object.extend"],"ui_dependencies":["baidu.dom.setAttr","baidu.dom.setStyles","baidu.dom._styleFilter.px","baidu.dom._styleFixer.opacity","baidu.string.format","baidu.browser.ie","baidu.event.on","baidu.event.un","baidu.page.getViewWidth","baidu.page.getViewHeight","baidu.page.getScrollLeft","baidu.page.getScrollTop","baidu.lang.isNumber","baidu.object.each","baidu.object.extend"]},"baidu.ui.modal":{"status":"0","doc":"baidu_ui_modal.html","description":null,"dependencies":["baidu.ui"],"ui_dependencies":[]},"baidu.ui.smartCover":{"status":"0","doc":"baidu_ui_smartCover.html","description":null,"dependencies":["baidu.ui","baidu.ui.get","baidu.ui.smartPosition.set","baidu.object.extend","baidu.browser.ie","baidu.dom.hasAttr","baidu.dom.setStyles","baidu.dom._styleFilter.px","baidu.dom.getPosition"],"ui_dependencies":["baidu.object.extend","baidu.browser.ie","baidu.dom.hasAttr","baidu.dom.setStyles","baidu.dom._styleFilter.px","baidu.dom.getPosition"]},"baidu.ui.smartPosition.element":{"status":"0","doc":"baidu_ui_smartPosition_element.html","description":null,"dependencies":["baidu.ui.smartPosition.SmartPosition","baidu.dom.getPosition"],"ui_dependencies":["baidu.dom.getPosition"]},"baidu.ui.smartPosition.mouse":{"status":"0","doc":"baidu_ui_smartPosition_mouse.html","description":null,"dependencies":["baidu.ui.smartPosition.SmartPosition","baidu.page.getMousePosition","baidu.event.on"],"ui_dependencies":["baidu.page.getMousePosition","baidu.event.on"]},"baidu.ui.smartPosition.set":{"status":"0","doc":"baidu_ui_smartPosition_set.html","description":null,"dependencies":["baidu.ui.smartPosition.SmartPosition","baidu.dom.g"],"ui_dependencies":["baidu.dom.g"]},"baidu.ui.smartPosition.setBorderBoxStyles":{"status":"0","doc":"baidu_ui_smartPosition_setBorderBoxStyles.html","description":null,"dependencies":["baidu.ui.smartPosition","baidu.dom.g","baidu.dom.setStyles","baidu.dom.getStyle"],"ui_dependencies":["baidu.dom.g","baidu.dom.setStyles","baidu.dom.getStyle"]},"baidu.ui.smartPosition.SmartPosition":{"status":"0","doc":"baidu_ui_smartPosition_SmartPosition.html","description":null,"dependencies":["baidu.ui.smartPosition","baidu.ui.createUI","baidu.dom.getWindow","baidu.dom.getStyle","baidu.dom.setStyles","baidu.dom.getPosition","baidu.dom._styleFilter.px","baidu.ui.smartPosition.setBorderBoxStyles","baidu.event.on","baidu.page.getViewWidth","baidu.page.getViewHeight","baidu.page.getScrollTop","baidu.page.getScrollLeft"],"ui_dependencies":["baidu.dom.getWindow","baidu.dom.getStyle","baidu.dom.setStyles","baidu.dom.getPosition","baidu.dom._styleFilter.px","baidu.event.on","baidu.page.getViewWidth","baidu.page.getViewHeight","baidu.page.getScrollTop","baidu.page.getScrollLeft"]},"baidu.ui.smartPosition":{"status":"0","doc":"baidu_ui_smartPosition.html","description":null,"dependencies":["baidu.ui"],"ui_dependencies":[]},"baidu.ui.suggestion.create":{"status":"0","doc":"baidu_ui_suggestion_create.html","description":null,"dependencies":["baidu.dom.g","baidu.ui.suggestion","baidu.ui.suggestion.Suggestion","baidu.ui.suggestion.Suggestion$data","baidu.ui.suggestion.Suggestion$input","baidu.ui.suggestion.Suggestion$fixWidth"],"ui_dependencies":["baidu.dom.g"]},"baidu.ui.suggestion.Suggestion$data":{"status":"0","doc":"baidu_ui_suggestion_Suggestion$data.html","description":null,"dependencies":["baidu.ui.suggestion.Suggestion"],"ui_dependencies":[]},"baidu.ui.suggestion.Suggestion$fixWidth":{"status":"0","doc":"baidu_ui_suggestion_Suggestion$fixWidth.html","description":null,"dependencies":["baidu.ui.suggestion.Suggestion","baidu.object.extend","baidu.browser.ie","baidu.dom.getPosition","baidu.dom.getStyle","baidu.dom.setStyle","baidu.dom._styleFilter.px","baidu.ui.smartPosition.set","baidu.event.on","baidu.event.un"],"ui_dependencies":["baidu.object.extend","baidu.browser.ie","baidu.dom.getPosition","baidu.dom.getStyle","baidu.dom.setStyle","baidu.dom._styleFilter.px","baidu.event.on","baidu.event.un"]},"baidu.ui.suggestion.Suggestion$input":{"status":"0","doc":"baidu_ui_suggestion_Suggestion$input.html","description":null,"dependencies":["baidu.ui.suggestion","baidu.ui.suggestion.Suggestion","baidu.event.preventDefault","baidu.event.stopPropagation","baidu.dom.g","baidu.event.on","baidu.event.un"],"ui_dependencies":["baidu.event.preventDefault","baidu.event.stopPropagation","baidu.dom.g","baidu.event.on","baidu.event.un"]},"baidu.ui.suggestion.Suggestion$smartCover":{"status":"0","doc":"baidu_ui_suggestion_Suggestion$smartCover.html","description":null,"dependencies":["baidu.ui.suggestion.Suggestion","baidu.ui.smartCover"],"ui_dependencies":[]},"baidu.ui.suggestion.Suggestion":{"status":"0","doc":"baidu_ui_suggestion_Suggestion.html","description":null,"dependencies":["baidu.dom.g","baidu.dom.getPosition","baidu.dom.remove","baidu.string.format","baidu.event.on","baidu.event.un","baidu.object.extend","baidu.browser.ie","baidu.event.preventDefault","baidu.lang.Event","baidu.ui.suggestion","baidu.ui.createUI","baidu.ui.get"],"ui_dependencies":["baidu.dom.g","baidu.dom.getPosition","baidu.dom.remove","baidu.string.format","baidu.event.on","baidu.event.un","baidu.object.extend","baidu.browser.ie","baidu.event.preventDefault","baidu.lang.Event"]},"baidu.ui.suggestion":{"status":"0","doc":"baidu_ui_suggestion.html","description":null,"dependencies":["baidu.ui"],"ui_dependencies":[]},"baidu.ui.tooltip.click":{"status":"0","doc":"baidu_ui_tooltip_click.html","description":null,"dependencies":["baidu.ui.tooltip","baidu.ui.tooltip.create","baidu.ui.get","baidu.event.on","baidu.event.un","baidu.event.getTarget","baidu.dom.getAncestorBy","baidu.lang.isArray","baidu.array.each"],"ui_dependencies":["baidu.event.on","baidu.event.un","baidu.event.getTarget","baidu.dom.getAncestorBy","baidu.lang.isArray","baidu.array.each"]},"baidu.ui.tooltip.create":{"status":"0","doc":"baidu_ui_tooltip_create.html","description":null,"dependencies":["baidu.ui.tooltip","baidu.ui.tooltip.Tooltip","baidu.array.each","baidu.lang.toArray","baidu.dom.g","baidu.dom.getPosition"],"ui_dependencies":["baidu.array.each","baidu.lang.toArray","baidu.dom.g","baidu.dom.getPosition"]},"baidu.ui.tooltip.hover":{"status":"0","doc":"baidu_ui_tooltip_hover.html","description":null,"dependencies":["baidu.ui.tooltip","baidu.ui.tooltip.create","baidu.event.on","baidu.event.get","baidu.object.clone","baidu.object.extend"],"ui_dependencies":["baidu.event.on","baidu.event.get","baidu.object.clone","baidu.object.extend"]},"baidu.ui.tooltip.Tooltip$fx":{"status":"0","doc":"baidu_ui_tooltip_Tooltip$fx.html","description":null,"dependencies":["baidu.ui.tooltip.Tooltip","baidu.fx.fadeIn","baidu.fx.fadeOut","baidu.dom.g"],"ui_dependencies":["baidu.dom.g"]},"baidu.ui.tooltip.Tooltip":{"status":"0","doc":"baidu_ui_tooltip_Tooltip.html","description":null,"dependencies":["baidu.ui.tooltip","baidu.ui.createUI","baidu.object.extend","baidu.dom.g","baidu.dom.setStyles","baidu.dom.remove","baidu.string.format","baidu.ui.smartPosition.mouse","baidu.ui.smartPosition.element"],"ui_dependencies":["baidu.object.extend","baidu.dom.g","baidu.dom.setStyles","baidu.dom.remove","baidu.string.format"]},"baidu.ui.tooltip":{"status":"0","doc":"baidu_ui_tooltip.html","description":null,"dependencies":["baidu.ui"],"ui_dependencies":[]},"baidu.ui":{"status":"0","doc":"baidu_ui.html","description":null,"dependencies":["baidu"],"ui_dependencies":["baidu"]}}};