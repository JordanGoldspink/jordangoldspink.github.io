! function() {
    const t = "properties";
    class e extends HTMLElement {
        constructor() {
            super(), this._id = "axxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t => {
                let e = 16 * Math.random() | 0;
                return ("x" === t ? e : 3 & e | 8).toString(16)
            })), this.callcount = 0, this.oView = void 0, this.isDataRefreshPaused = !0, this.template = document.createElement("template"), this.template.innerHTML = '\n\t\t\t\t<style>\n\t\t\t\t</style>\n\t\t\t\t<div id="ui5-content-' + this._id + '" name="ui5_content" style="height: calc(100vh - 200px);">\n\t\t\t\t\t<slot name="content-' + this._id + '"></slot>\n\t\t\t\t</div>\n\t\t\t\t', this.xml_view_definition = '\n\t\t\t\t\t<mvc:View\n\t\t\t\t\txmlns="sap.ui.table"\n\t\t\t\t\txmlns:mvc="sap.ui.core.mvc"\n\t\t\t\t\txmlns:m="sap.m"\n\t\t\t\t\txmlns:u="sap.ui.unified"\n\t\t\t\t\txmlns:core="sap.ui.core"\n\t\t\t\t\txmlns:dnd="sap.ui.core.dnd"\n\t\t\t\t\txmlns:uxap="sap.uxap"\n\t\t\t\t\txmlns:l="sap.ui.layout"\n\t\t\t\t\txmlns:f="sap.ui.layout.form"\n\t\t\t\t\theight="100%"\n\t\t\t\t\tcontrollerName="myView.Template">\n\t\n\t\t\t\t\t<core:HTML content=\'\n\t\t\t\t\t\t&lt;style&gt;\n\t\t\t\t\t\t\t.class {\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t&lt;/style&gt;\n\t\t\t\t\t\'>\n\t\t\t\t\t</core:HTML>\n\t\n\t\t\t\t\t\t<m:Page\n\t\t\t\t\t\t\ttitle="Page"\n\t\t\t\t\t\t\tshowHeader="false"\n\t\t\t\t\t\t\tenableScrolling="true"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<m:content>\n\t\t\t\t\t\t\t\t<m:VBox class="sapUiSmallMargin">\n\t\t\t\t\t\t\t\t\t<f:SimpleForm\n\t\t\t\t\t\t\t\t\t\teditable="true"\n\t\t\t\t\t\t\t\t\t\tlayout="ResponsiveGridLayout"\n\t\t\t\t\t\t\t\t\t\tlabelSpanXL="4"\n\t\t\t\t\t\t\t\t\t\tlabelSpanL="3"\n\t\t\t\t\t\t\t\t\t\tlabelSpanM="4"\n\t\t\t\t\t\t\t\t\t\tlabelSpanS="12"\n\t\t\t\t\t\t\t\t\t\tadjustLabelSpan="false"\n\t\t\t\t\t\t\t\t\t\temptySpanXL="0"\n\t\t\t\t\t\t\t\t\t\temptySpanL="4"\n\t\t\t\t\t\t\t\t\t\temptySpanM="0"\n\t\t\t\t\t\t\t\t\t\temptySpanS="0"\n\t\t\t\t\t\t\t\t\t\tcolumnsXL="2"\n\t\t\t\t\t\t\t\t\t\tcolumnsL="1"\n\t\t\t\t\t\t\t\t\t\tcolumnsM="1"\n\t\t\t\t\t\t\t\t\t\tsingleContainerFullSize="false"\n\t\t\t\t\t\t\t\t\t\tariaLabelledBy="Title1" >\n\t\t\t\t\t\t\t\t\t\t<f:content>\n\t\t\t\t\t\t\t\t\t\t\t<m:Label text="Apply Same Color For All Bars" labelFor="bars_color" />\n\t\t\t\t\t\t\t\t\t\t\t<m:MaskInput mask="#CCCCCC" placeholderSymbol="_" placeholder="HEX Code" id="bars_color" value="{properties>/bars_color}">\n\t\t\t\t\t\t\t\t\t\t\t\t<m:rules>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<m:MaskInputRule maskFormatSymbol="C" regex="[A-Fa-f0-9]"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</m:rules>\n\t\t\t\t\t\t\t\t\t\t\t</m:MaskInput>\n\n\t\t\t\t\t\t\t\t\t\t\t<m:CheckBox text="Automatic Text Color" selected="{properties>/automatic_bars_text_color}" id="automatic_bars_text_color"/>\n\n\t\t\t\t\t\t\t\t\t\t\t<m:Label text="Fixed Text Color" labelFor="bars_text_color" />\n\t\t\t\t\t\t\t\t\t\t\t<m:MaskInput mask="#CCCCCC" placeholderSymbol="_" placeholder="HEX Code" id="bars_text_color" value="{properties>/bars_text_color}">\n\t\t\t\t\t\t\t\t\t\t\t\t<m:rules>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<m:MaskInputRule maskFormatSymbol="C" regex="[A-Fa-f0-9]"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</m:rules>\n\t\t\t\t\t\t\t\t\t\t\t</m:MaskInput>\n\n\t\t\t\t\t\t\t\t\t\t\t<m:Label text="Bars Opacity" labelFor="bars_opacity" />\n\t\t\t\t\t\t\t\t\t\t\t<m:Input id="bars_opacity" type="Number" value="{properties>/bars_opacity}" required="false" enabled="true"/>\n\t\t\t\t\t\t\t\t\t\t</f:content>\n\t\t\t\t\t\t\t\t\t</f:SimpleForm>\n\t\t\t\t\t\t\t\t</m:VBox>\n\t\t\t\t\t\t\t</m:content>\n\t\t\t\t\t\t</m:Page>\n\t\t\t\t\t</mvc:View> \n\t\t\t\t', this.shadowRoot_ = this.attachShadow({
                mode: "open"
            }), this.shadowRoot_.appendChild(this.template.content.cloneNode(!0)), this._props = {}
        }
        onCustomWidgetBeforeUpdate(t) {
            this._props = {
                ...this._props,
                ...t
            }
        }
        onCustomWidgetAfterUpdate(e) {
            this.callcount = this.callcount + 1, 1 === this.callcount && (this.initialProperties = {
                ...e
            });
            var n = this;
            this.UI5InitializePromise = new Promise(((e, a) => {
                this.oView || e(function(e) {
                    let n = document.createElement("div");
                    n.slot = "content-" + e._id, n.style.height = "100%", e.appendChild(n), sap.ui.getCore().attachInit((function() {
                        sap.ui.define(["jquery.sap.global", "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "sap/gantt/misc/Format", "sap/ui/core/IconPool", "sap/m/MessageToast"], (function(n, a, o, l, i, s) {
                            return a.extend("myView.Template", {
                                onInit: function() {
                                    var n = new sap.ui.model.json.JSONModel({
                                        ...e.initialProperties
                                    });
                                    this.getView().setModel(n, t), n.attachPropertyChange((function(t) {
                                        let n = {};
                                        n[t.getParameter("path").slice(1)] = t.getParameter("value"), e.dispatchEvent(new CustomEvent("propertiesChanged", {
                                            detail: {
                                                properties: n
                                            }
                                        }))
                                    })), this.getView().byId("bars_text_color").bindProperty("enabled", {
                                        path: "properties>/automatic_bars_text_color",
                                        formatter: function(t) {
                                            return !t
                                        }
                                    })
                                }
                            })
                        })), e.oView = sap.ui.xmlview(e._id + "_oView", {
                            viewContent: e.xml_view_definition
                        }), e.oView.placeAt(n)
                    }))
                }(n))
            }))
        }
    }
    customElements.define("ui5-gantt-chart-styling", e)
}();