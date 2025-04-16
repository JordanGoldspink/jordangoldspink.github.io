! function() {
    const t = "properties";
    class e extends HTMLElement {
        constructor() {
            super(), this._id = "axxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t => {
                let e = 16 * Math.random() | 0;
                return ("x" === t ? e : 3 & e | 8).toString(16)
            })), this.callcount = 0, this.oView = void 0, this.isDataRefreshPaused = !0, this.template = document.createElement("template"), this.template.innerHTML = '\n\t\t\t\t<style>\n\t\t\t\t</style>\n\t\t\t\t<div id="ui5-content-' + this._id + '" name="ui5_content" style="height: calc(100vh - 200px);">\n\t\t\t\t\t<slot name="content-' + this._id + '"></slot>\n\t\t\t\t</div>\n\t\t\t\t', this.xml_view_definition = '\n\t\t\t\t\t<mvc:View\n\t\t\t\t\txmlns="sap.ui.table"\n\t\t\t\t\txmlns:mvc="sap.ui.core.mvc"\n\t\t\t\t\txmlns:m="sap.m"\n\t\t\t\t\txmlns:u="sap.ui.unified"\n\t\t\t\t\txmlns:core="sap.ui.core"\n\t\t\t\t\txmlns:dnd="sap.ui.core.dnd"\n\t\t\t\t\txmlns:uxap="sap.uxap"\n\t\t\t\t\txmlns:l="sap.ui.layout"\n\t\t\t\t\txmlns:f="sap.ui.layout.form"\n\t\t\t\t\theight="100%"\n\t\t\t\t\tcontrollerName="myView.Template">\n\t\n\t\t\t\t\t<core:HTML content=\'\n\t\t\t\t\t\t&lt;style&gt;\n\t\t\t\t\t\t\t.class {\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t&lt;/style&gt;\n\t\t\t\t\t\'>\n\t\t\t\t\t</core:HTML>\n\t\n\t\t\t\t\t\t<m:Page\n\t\t\t\t\t\t\ttitle="Page"\n\t\t\t\t\t\t\tshowHeader="false"\n\t\t\t\t\t\t\tenableScrolling="true"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<m:content>\n\t\t\t\t\t\t\t\t<m:VBox class="sapUiSmallMargin">\n\t\t\t\t\t\t\t\t\t<f:SimpleForm id="SimpleFormToolbar"\n\t\t\t\t\t\t\t\t\t\teditable="true"\n\t\t\t\t\t\t\t\t\t\tlayout="ResponsiveGridLayout"\n\t\t\t\t\t\t\t\t\t\tlabelSpanXL="4"\n\t\t\t\t\t\t\t\t\t\tlabelSpanL="3"\n\t\t\t\t\t\t\t\t\t\tlabelSpanM="4"\n\t\t\t\t\t\t\t\t\t\tlabelSpanS="12"\n\t\t\t\t\t\t\t\t\t\tadjustLabelSpan="false"\n\t\t\t\t\t\t\t\t\t\temptySpanXL="0"\n\t\t\t\t\t\t\t\t\t\temptySpanL="4"\n\t\t\t\t\t\t\t\t\t\temptySpanM="0"\n\t\t\t\t\t\t\t\t\t\temptySpanS="0"\n\t\t\t\t\t\t\t\t\t\tcolumnsXL="2"\n\t\t\t\t\t\t\t\t\t\tcolumnsL="1"\n\t\t\t\t\t\t\t\t\t\tcolumnsM="1"\n\t\t\t\t\t\t\t\t\t\tsingleContainerFullSize="false"\n\t\t\t\t\t\t\t\t\t\tariaLabelledBy="Title1" >\n\t\t\t\t\t\t\t\t\t\t<f:toolbar>\n\t\t\t\t\t\t\t\t\t\t\t<m:Toolbar id="TB1">\n\t\t\t\t\t\t\t\t\t\t\t\t<m:Title id="Title1" text="Dataset Parsing Settings"/>\n\t\t\t\t\t\t\t\t\t\t\t</m:Toolbar>\n\t\t\t\t\t\t\t\t\t\t</f:toolbar>\n\t\t\t\t\t\t\t\t\t\t<f:content>\n\t\t\t\t\t\t\t\t\t\t\t<m:Label text="Dimension Containing Event ID" labelFor="event_id_field_name" />\n\t\t\t\t\t\t\t\t\t\t\t<m:Input id="event_id_field_name" value="{properties>/event_id_field_name}" required="true"/>\n\n\t\t\t\t\t\t\t\t\t\t\t<m:Label text="Dimension Containing Event Name" labelFor="event_name_field_name"/>\n\t\t\t\t\t\t\t\t\t\t\t<m:Input id="event_name_field_name" value="{properties>/event_name_field_name}" required="true"/>\n\n\t\t\t\t\t\t\t\t\t\t\t<m:Label text="Dimension Containing Event Description" labelFor="event_tooltip_field_name" />\n\t\t\t\t\t\t\t\t\t\t\t<m:Input id="event_tooltip_field_name" value="{properties>/event_tooltip_field_name}" required="false"/>\n\n\t\t\t\t\t\t\t\t\t\t\t<m:Label text="Dimension Containing Event Start Time" labelFor="event_start_time_field_name" />\n\t\t\t\t\t\t\t\t\t\t\t<m:Input id="event_start_time_field_name" value="{properties>/event_start_time_field_name}" required="true"/>\n\n\t\t\t\t\t\t\t\t\t\t\t<m:Label text="Dimension Containing Event End Time" labelFor="event_end_time_field_name" />\n\t\t\t\t\t\t\t\t\t\t\t<m:Input id="event_end_time_field_name" value="{properties>/event_end_time_field_name}" required="true"/>\n\n\t\t\t\t\t\t\t\t\t\t\t<m:Label text="Dimension Containing Event Parent ID" labelFor="event_parent_id_field_name" />\n\t\t\t\t\t\t\t\t\t\t\t<m:Input id="event_parent_id_field_name" value="{properties>/event_parent_id_field_name}" required="false"/>\n\n\t\t\t\t\t\t\t\t\t\t\t<m:Label text="Dimension Containing Color of Event Bar" labelFor="event_color_field_name" />\n\t\t\t\t\t\t\t\t\t\t\t<m:Input id="event_color_field_name" value="{properties>/event_color_field_name}" required="false"/>\n\t\t\t\t\t\t\t\t\t\t</f:content>\n\t\t\t\t\t\t\t\t\t</f:SimpleForm>\n\t\t\t\t\t\t\t\t\t<f:SimpleForm\n\t\t\t\t\t\t\t\t\t\teditable="true"\n\t\t\t\t\t\t\t\t\t\tlayout="ResponsiveGridLayout"\n\t\t\t\t\t\t\t\t\t\tlabelSpanXL="4"\n\t\t\t\t\t\t\t\t\t\tlabelSpanL="3"\n\t\t\t\t\t\t\t\t\t\tlabelSpanM="4"\n\t\t\t\t\t\t\t\t\t\tlabelSpanS="12"\n\t\t\t\t\t\t\t\t\t\tadjustLabelSpan="false"\n\t\t\t\t\t\t\t\t\t\temptySpanXL="0"\n\t\t\t\t\t\t\t\t\t\temptySpanL="4"\n\t\t\t\t\t\t\t\t\t\temptySpanM="0"\n\t\t\t\t\t\t\t\t\t\temptySpanS="0"\n\t\t\t\t\t\t\t\t\t\tcolumnsXL="2"\n\t\t\t\t\t\t\t\t\t\tcolumnsL="1"\n\t\t\t\t\t\t\t\t\t\tcolumnsM="1"\n\t\t\t\t\t\t\t\t\t\tsingleContainerFullSize="false"\n\t\t\t\t\t\t\t\t\t\tariaLabelledBy="Title1" >\n\t\t\t\t\t\t\t\t\t\t<f:toolbar>\n\t\t\t\t\t\t\t\t\t\t\t<m:Toolbar>\n\t\t\t\t\t\t\t\t\t\t\t\t<m:Title text="Time Zone Settings"/>\n\t\t\t\t\t\t\t\t\t\t\t</m:Toolbar>\n\t\t\t\t\t\t\t\t\t\t</f:toolbar>\n\t\t\t\t\t\t\t\t\t\t<f:content>\n\t\t\t\t\t\t\t\t\t\t\t<m:Label text="Dataset Timezone Offset from UTC (UTC � X)" labelFor="data_utc_offset" />\n\t\t\t\t\t\t\t\t\t\t\t<m:Input id="data_utc_offset" type="Number" value="{properties>/data_utc_offset}" required="true"/>\n\t\t\t\t\t\t\t\t\t\t</f:content>\n\t\t\t\t\t\t\t\t\t</f:SimpleForm>\n\t\t\t\t\t\t\t\t\t<f:SimpleForm\n\t\t\t\t\t\t\t\t\t\teditable="true"\n\t\t\t\t\t\t\t\t\t\tlayout="ResponsiveGridLayout"\n\t\t\t\t\t\t\t\t\t\tlabelSpanXL="4"\n\t\t\t\t\t\t\t\t\t\tlabelSpanL="3"\n\t\t\t\t\t\t\t\t\t\tlabelSpanM="4"\n\t\t\t\t\t\t\t\t\t\tlabelSpanS="12"\n\t\t\t\t\t\t\t\t\t\tadjustLabelSpan="false"\n\t\t\t\t\t\t\t\t\t\temptySpanXL="0"\n\t\t\t\t\t\t\t\t\t\temptySpanL="4"\n\t\t\t\t\t\t\t\t\t\temptySpanM="0"\n\t\t\t\t\t\t\t\t\t\temptySpanS="0"\n\t\t\t\t\t\t\t\t\t\tcolumnsXL="2"\n\t\t\t\t\t\t\t\t\t\tcolumnsL="1"\n\t\t\t\t\t\t\t\t\t\tcolumnsM="1"\n\t\t\t\t\t\t\t\t\t\tsingleContainerFullSize="false"\n\t\t\t\t\t\t\t\t\t\tariaLabelledBy="Title1" >\n\t\t\t\t\t\t\t\t\t\t<f:toolbar>\n\t\t\t\t\t\t\t\t\t\t\t<m:Toolbar>\n\t\t\t\t\t\t\t\t\t\t\t\t<m:Title text="Horizon Settings"/>\n\t\t\t\t\t\t\t\t\t\t\t</m:Toolbar>\n\t\t\t\t\t\t\t\t\t\t</f:toolbar>\n\t\t\t\t\t\t\t\t\t\t<f:content>\n\t\t\t\t\t\t\t\t\t\t\t<core:Title text="Total Horizon" />\n\n\t\t\t\t\t\t\t\t\t\t\t<m:CheckBox text="Dynamic Total Horizon" selected="{properties>/dynamic_total_horizon}" id="dynamic_total_horizon"/>\n\n\t\t\t\t\t\t\t\t\t\t\t<m:Label text="Look Back (Minutes)" labelFor="total_horizon_start_time_shift_in_minutes" />\n\t\t\t\t\t\t\t\t\t\t\t<m:Input id="total_horizon_start_time_shift_in_minutes" type="Number" value="{properties>/total_horizon_start_time_shift_in_minutes}" required="{properties>/dynamic_total_horizon}" enabled="{properties>/dynamic_total_horizon}"/>\n\n\t\t\t\t\t\t\t\t\t\t\t<m:Label text="Look Forward (Minutes)" labelFor="total_horizon_end_time_shift_in_minutes" />\n\t\t\t\t\t\t\t\t\t\t\t<m:Input id="total_horizon_end_time_shift_in_minutes" type="Number" value="{properties>/total_horizon_end_time_shift_in_minutes}" required="{properties>/dynamic_total_horizon}" enabled="{properties>/dynamic_total_horizon}"/>\n\n\t\t\t\t\t\t\t\t\t\t\t<m:Label text="Start Time (YYYYMMDDHHmmss)" labelFor="horizon_start_time" />\n\t\t\t\t\t\t\t\t\t\t\t<m:Input id="horizon_start_time" type="Number" value="{properties>/horizon_start_time}"/>\n\n\t\t\t\t\t\t\t\t\t\t\t<m:Label text="End Time (YYYYMMDDHHmmss)" labelFor="horizon_end_time" />\n\t\t\t\t\t\t\t\t\t\t\t<m:Input id="horizon_end_time" type="Number" value="{properties>/horizon_end_time}"/>\n\n\t\t\t\t\t\t\t\t\t\t\t<core:Title text="Visual Horizon" />\n\n\t\t\t\t\t\t\t\t\t\t\t<m:CheckBox text="Dynamic Visual Horizon (Based on Data in the Dataset)" selected="{properties>/dynamic_visual_horizon}" id="dynamic_visual_horizon"/>\n\n\t\t\t\t\t\t\t\t\t\t</f:content>\n\t\t\t\t\t\t\t\t\t</f:SimpleForm>\n\t\t\t\t\t\t\t\t\t<f:SimpleForm\n\t\t\t\t\t\t\t\t\t\teditable="true"\n\t\t\t\t\t\t\t\t\t\tlayout="ResponsiveGridLayout"\n\t\t\t\t\t\t\t\t\t\tlabelSpanXL="4"\n\t\t\t\t\t\t\t\t\t\tlabelSpanL="3"\n\t\t\t\t\t\t\t\t\t\tlabelSpanM="4"\n\t\t\t\t\t\t\t\t\t\tlabelSpanS="12"\n\t\t\t\t\t\t\t\t\t\tadjustLabelSpan="false"\n\t\t\t\t\t\t\t\t\t\temptySpanXL="0"\n\t\t\t\t\t\t\t\t\t\temptySpanL="4"\n\t\t\t\t\t\t\t\t\t\temptySpanM="0"\n\t\t\t\t\t\t\t\t\t\temptySpanS="0"\n\t\t\t\t\t\t\t\t\t\tcolumnsXL="2"\n\t\t\t\t\t\t\t\t\t\tcolumnsL="1"\n\t\t\t\t\t\t\t\t\t\tcolumnsM="1"\n\t\t\t\t\t\t\t\t\t\tsingleContainerFullSize="false"\n\t\t\t\t\t\t\t\t\t\tariaLabelledBy="Title1" >\n\t\t\t\t\t\t\t\t\t\t<f:toolbar>\n\t\t\t\t\t\t\t\t\t\t\t<m:Toolbar>\n\t\t\t\t\t\t\t\t\t\t\t\t<m:Title text="Display Mode"/>\n\t\t\t\t\t\t\t\t\t\t\t</m:Toolbar>\n\t\t\t\t\t\t\t\t\t\t</f:toolbar>\n\t\t\t\t\t\t\t\t\t\t<f:content>\n\t\t\t\t\t\t\t\t\t\t\t<m:CheckBox text="Compact Representation" selected="{properties>/compact_mode}" id="compact_mode"/>\n\t\t\t\t\t\t\t\t\t\t</f:content>\n\t\t\t\t\t\t\t\t\t</f:SimpleForm>\n\t\t\t\t\t\t\t\t\t<f:SimpleForm\n\t\t\t\t\t\t\t\t\t\teditable="true"\n\t\t\t\t\t\t\t\t\t\tlayout="ResponsiveGridLayout"\n\t\t\t\t\t\t\t\t\t\tlabelSpanXL="4"\n\t\t\t\t\t\t\t\t\t\tlabelSpanL="3"\n\t\t\t\t\t\t\t\t\t\tlabelSpanM="4"\n\t\t\t\t\t\t\t\t\t\tlabelSpanS="12"\n\t\t\t\t\t\t\t\t\t\tadjustLabelSpan="false"\n\t\t\t\t\t\t\t\t\t\temptySpanXL="0"\n\t\t\t\t\t\t\t\t\t\temptySpanL="4"\n\t\t\t\t\t\t\t\t\t\temptySpanM="0"\n\t\t\t\t\t\t\t\t\t\temptySpanS="0"\n\t\t\t\t\t\t\t\t\t\tcolumnsXL="2"\n\t\t\t\t\t\t\t\t\t\tcolumnsL="1"\n\t\t\t\t\t\t\t\t\t\tcolumnsM="1"\n\t\t\t\t\t\t\t\t\t\tsingleContainerFullSize="false"\n\t\t\t\t\t\t\t\t\t\tariaLabelledBy="Title1" >\n\t\t\t\t\t\t\t\t\t\t<f:toolbar>\n\t\t\t\t\t\t\t\t\t\t\t<m:Toolbar>\n\t\t\t\t\t\t\t\t\t\t\t\t<m:Title text="Table Settings"/>\n\t\t\t\t\t\t\t\t\t\t\t</m:Toolbar>\n\t\t\t\t\t\t\t\t\t\t</f:toolbar>\n\t\t\t\t\t\t\t\t\t\t<f:content>\n\t\t\t\t\t\t\t\t\t\t\t<m:Label text="Table Columns" labelFor="table_columns" />\n\t\t\t\t\t\t\t\t\t\t\t<m:TextArea value="{properties>/table_columns}" id="table_columns" rows="10" required="true"/>\n\t\t\t\t\t\t\t\t\t\t</f:content>\n\t\t\t\t\t\t\t\t\t</f:SimpleForm>\n\t\t\t\t\t\t\t\t</m:VBox>\n\t\t\t\t\t\t\t</m:content>\n\t\t\t\t\t\t</m:Page>\n\t\t\t\t\t</mvc:View> \n\t\t\t\t', this.shadowRoot_ = this.attachShadow({
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
            this.UI5InitializePromise = new Promise(((e, i) => {
                this.oView || e(function(e) {
                    let n = document.createElement("div");
                    n.slot = "content-" + e._id, n.style.height = "100%", e.appendChild(n), sap.ui.getCore().attachInit((function() {
                        sap.ui.define(["jquery.sap.global", "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "sap/gantt/misc/Format", "sap/ui/core/IconPool", "sap/m/MessageToast"], (function(n, i, a, o, l, r) {
                            return i.extend("myView.Template", {
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
                                    })), this.getView().byId("horizon_start_time").bindProperty("enabled", {
                                        path: "properties>/dynamic_total_horizon",
                                        formatter: function(t) {
                                            return !t
                                        }
                                    }), this.getView().byId("horizon_end_time").bindProperty("enabled", {
                                        path: "properties>/dynamic_total_horizon",
                                        formatter: function(t) {
                                            return !t
                                        }
                                    }), this.getView().byId("horizon_start_time").bindProperty("required", {
                                        path: "properties>/dynamic_total_horizon",
                                        formatter: function(t) {
                                            return !t
                                        }
                                    }), this.getView().byId("horizon_end_time").bindProperty("required", {
                                        path: "properties>/dynamic_total_horizon",
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
    customElements.define("ui5-gantt-chart-builder", e)
}();