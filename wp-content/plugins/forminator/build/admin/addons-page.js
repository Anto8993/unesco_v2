!function(o){formintorjs.define([],function(){var a=Backbone.View.extend({el:".wpmudev-forminator-forminator-addons",events:{"click button.addons-actions":"addons_actions","click a.addons-actions":"addons_actions","click .sui-dialog-close":"close","click .addons-modal-close":"close","click .addons-page-details":"open_addons_detail"},initialize:function(){o(".wpmudev-forminator-forminator-addons").length},addons_actions:function(a){var t=this,n=o(a.target),e={},d=n.data("nonce"),i=n.data("action"),s=n.data("popup"),r=n.data("addon");return e.action="forminator_"+i,e.pid=r,e._ajax_nonce=d,n.addClass("sui-button-onload"),t.$el.find(".sui-button.addons-actions:not(.disable-loader)").attr("disabled",!0),o.post({url:Forminator.Data.ajaxUrl,type:"post",data:e}).done(function(o){if(void 0!==o.data.error)return t.show_notification(o.data.error.message,"error"),!1;if("addons-install"===i)setTimeout(function(){t.active_popup(r,"show","forminator-activate-popup"),t.$el.find(".sui-tab-content .addons-"+r).not(this).replaceWith(o.data.html),t.loader_remove()},1e3);else{if(t.show_notification(o.data.message,"success"),t.$el.find(".sui-tab-content .addons-"+r).not(this).replaceWith(o.data.html),"addons-update"===i){var a=t.$el.find("#forminator-modal-addons-details-"+r);t.$el.find("#updates-addons-content .addons-"+r).remove();var e=t.$el.find("#updates-addons-content .sui-col-md-6").length;e<1&&t.$el.find("#updates-addons span.sui-tag").removeClass("sui-tag-yellow"),t.$el.find("#updates-addons span.sui-tag").html(e),a.find(".forminator-details-header--tags span.addons-update-tag").remove();var d=n.data("version");a.find(".forminator-details-header--tags span.addons-version").html(d),a.find(".forminator-details-header button.addons-actions").remove(),n.remove()}s&&location.reload()}}).fail(function(){t.show_notification(Forminator.l10n.commons.error_message,"error")}),!1},close:function(a){a.preventDefault();var t=o(a.target),n=t.data("addon"),e=t.data("element");this.active_popup(n,"hide",e)},loader_remove:function(){this.$el.find(".sui-button.addons-actions:not(.disable-loader)").removeClass("sui-button-onload").attr("disabled",!1)},show_notification:function(o,a){var t=void 0!==o?o:Forminator.l10n.commons.error_message;Forminator.Notification.open(a,t,4e3),this.loader_remove()},active_popup:function(o,a,t){var n=t+"-"+o,e="forminator-addon-"+o+"__card";"show"===a?SUI.openModal(n,e):SUI.closeModal()},open_addons_detail:function(a){var t=this,n=o(a.target),e=n.data("form-id");t.active_popup(e,"show","forminator-modal-addons-details")}}),a=new a;return a})}(jQuery);