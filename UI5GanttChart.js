! function() {
    const t = "#0070b1";
    class e extends HTMLElement {
        constructor() {
            super(), this.model_data = [], this.manual_data = [], this.callcount = 0, this._id = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t => {
                let e = 16 * Math.random() | 0;
                return ("x" === t ? e : 3 & e | 8).toString(16)
            })), this.oView = void 0, this.local_time_utc_offset = (new Date).getTimezoneOffset() / 60 * -1, this.data_utc_offset = 0, this.template = document.createElement("template"), this.template.innerHTML = '\n\t\t\t<style>\n\t\t\t</style>\n\t\t\t<div id="ui5-content-' + this._id + '" name="ui5_content" style="height: 100%;">\n\t\t\t\t<slot name="content-' + this._id + '"></slot>\n\t\t\t</div>\n\t\t\t', this.xml_view_definition = '\n\t\t\t<mvc:View\n\t\t\txmlns="sap.m"\n\t\t\txmlns:mvc="sap.ui.core.mvc"\n\t\t\txmlns:core="sap.ui.core"\n\t\t\txmlns:gantt="sap.gantt.simple"\n\t\t\txmlns:table="sap.ui.table"\n\t\t\txmlns:shapes="sap.gantt.simple.shapes"\n\t\t\txmlns:axistime="sap.gantt.axistime"\n\t\t\txmlns:ganttconfig="sap.gantt.config"\n\t\t\txmlns:gnt="sap.gantt"\n\t\t\txmlns:cal="sap.gantt.def.cal"\n\t\t\theight="100%"\n\t\t\tcontrollerName="myView.Template">\n\n\t\t\t<core:HTML content=\'\n\t\t\t\t\t&lt;style&gt;\n\t\t\t\t\t\t.custGanttInvertColors .sapGanttChartShapes  {\n\t\t\t\t\t\t\tfilter: invert(1);\n\t\t\t\t\t\t}\n\t\t\t\t\t&lt;/style&gt;\n\t\t\t\t\'>\n\t\t\t</core:HTML>\n\n\t\t\t<core:HTML content=\'\n\t\t\t\t&lt;svg width=&quot;10&quot; height=&quot;10&quot; version=&quot;1.1&quot;&gt;\n\t\t\t\t\t&lt;defs&gt;\n\n\t\t\t\t\t\t&lt;pattern id=&quot;forecast&quot; patternUnits=&quot;userSpaceOnUse&quot; width=&quot;4&quot; height=&quot;8&quot; patternTransform=&quot;rotate(-45 2 2)&quot;&gt;\n\t\t\t\t\t\t\t&lt;path d=&quot;M -1,2 l 6,0&quot; stroke=&quot;#666666&quot; stroke-width=&quot;2&quot;/&gt;\n\t\t\t\t\t\t&lt;/pattern&gt;\n\t\t\t\t\t\t&lt;pattern id=&quot;budget&quot; patternUnits=&quot;userSpaceOnUse&quot; width=&quot;1&quot; height=&quot;1&quot;&gt;\n\t\t\t\t\t\t\t&lt;path d=&quot;M 0,0 l 1,1&quot; stroke=&quot;#ffffff&quot; stroke-width=&quot;2&quot;/&gt;\n\t\t\t\t\t\t&lt;/pattern&gt;\n\n\t\t\t\t\t\t<svg patterns definition>\n\t\t\t\t\t&lt;/defs&gt;\n\t\t\t\t&lt;/svg&gt;\n\t\t\t\'>\n\t\t\t</core:HTML>\n\n\t\t\t\t<Page\n\t\t\t\t\ttitle="Page"\n\t\t\t\t\tclass="sapUiContentPadding" \n\t\t\t\t\tshowHeader="false">\n\t\t\t\t\t<content>\n\t\t\t\t\t\t<gantt:GanttChartContainer>\n\t\t\t\t\t\t\t<gantt:toolbar>\n\t\t\t\t\t\t\t\t<gantt:ContainerToolbar/>\n\t\t\t\t\t\t\t</gantt:toolbar>\n\t\t\t\t\t\t\t<gantt:GanttChartWithTable id="gantt" shapeSelectionMode="Single" nowLineInUTC="false">\n\t\t\t\t\t\t\t\t<gantt:axisTimeStrategy>\n\t\t\t\t\t\t\t\t\t<axistime:ProportionZoomStrategy id="zoom_strategy">\n\t\t\t\t\t\t\t\t\t\t<axistime:totalHorizon id="total_horizon">\n\t\t\t\t\t\t\t\t\t\t\t<ganttconfig:TimeHorizon\n\t\t\t\t\t\t\t\t\t\t\t\tstartTime="{total_horizon_start}"\n\t\t\t\t\t\t\t\t\t\t\t\tendTime="{total_horizon_end}"/>\n\t\t\t\t\t\t\t\t\t\t</axistime:totalHorizon>\n\t\t\t\t\t\t\t\t\t\t<axistime:visibleHorizon id="visible_horizon">\n\t\t\t\t\t\t\t\t\t\t\t<ganttconfig:TimeHorizon\n\t\t\t\t\t\t\t\t\t\t\t\tstartTime="{visual_horizon_start}"\n\t\t\t\t\t\t\t\t\t\t\t\tendTime="{visual_horizon_end}"/>\n\t\t\t\t\t\t\t\t\t\t</axistime:visibleHorizon>\n\t\t\t\t\t\t\t\t\t</axistime:ProportionZoomStrategy>\n\t\t\t\t\t\t\t\t</gantt:axisTimeStrategy>\n\t\t\t\t\t\t\t\t<gantt:adhocLines>\n\t\t\t\t\t\t\t\t\t<gnt:AdhocLine stroke="#23803d" strokeWidth="2" strokeDasharray="5, 1" timeStamp="20220101000000" description="Start of the year"/>\n\t\t\t\t\t\t\t\t</gantt:adhocLines>\n\t\t\t\t\t\t\t\t<gantt:table>\n\t\t\t\t\t\t\t\t\t<table:TreeTable\n\t\t\t\t\t\t\t\t\t\t\tselectionMode="None"\n\t\t\t\t\t\t\t\t\t\t\tvisibleRowCountMode="Auto"\n\t\t\t\t\t\t\t\t\t\t\tminAutoRowCount="2"\n\t\t\t\t\t\t\t\t\t\t\tselectionBehavior="RowSelector"\n\t\t\t\t\t\t\t\t\t\t\tenableColumnReordering="true"\n\t\t\t\t\t\t\t\t\t\t\tid="tree_table">\n\t\t\t\t\t\t\t\t\t\t<table:columns>\n\t\t\t\t\t\t\t\t\t\t\t<columns definition>\n\t\t\t\t\t\t\t\t\t\t</table:columns>\n\t\t\t\t\t\t\t\t\t\t<table:rowSettingsTemplate>\n\t\t\t\t\t\t\t\t\t\t\t<gantt:GanttRowSettings id="gantt_row_settings" rowId="{eventsmodel>Event_Id}" shapes1="{eventsmodel>subtask}">\n\t\t\t\t\t\t\t\t\t\t\t\t<gantt:shapes1>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<gantt:BaseRectangle id="gantt_task" title="{eventsmodel>Event_Name}" titleColor="{titlecolor}"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tshapeId="{eventsmodel>Event_Id}"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tselectable="true"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\thoverable="true"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tconnectable="false"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\theight="25"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\thorizontalTextAlignment="Start"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tverticalTextAlignment="Center"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\topacity="{barsopacity}"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstroke="#666666" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\trx="5px"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\try="5px"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t\t\t\t</gantt:shapes1>\n\t\t\t\t\t\t\t\t\t\t\t\t<gantt:calendars>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<gantt:BaseCalendar calendarName="testing"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</gantt:calendars>\n\t\t\t\t\t\t\t\t\t\t\t</gantt:GanttRowSettings>\n\t\t\t\t\t\t\t\t\t\t</table:rowSettingsTemplate>\n\t\t\t\t\t\t\t\t\t</table:TreeTable>\n\t\t\t\t\t\t\t\t</gantt:table>\n\t\t\t\t\t\t\t\t<gantt:calendarDef>\n\t\t\t\t\t\t\t\t\t<cal:CalendarDefs>\n\t\t\t\t\t\t\t\t\t\t<cal:defs>\n\t\t\t\t\t\t\t\t\t\t\t<cal:Calendar key="testing" backgroundColor="#f19397">\n\t\t\t\t\t\t\t\t\t\t\t\t<cal:TimeInterval startTime="20220212000000" endTime="20220224000000"/>\n\t\t\t\t\t\t\t\t\t\t\t</cal:Calendar>\n\t\t\t\t\t\t\t\t\t\t</cal:defs>\n\t\t\t\t\t\t\t\t\t</cal:CalendarDefs>\n\t\t\t\t\t\t\t\t</gantt:calendarDef>\n\t\t\t\t\t\t\t</gantt:GanttChartWithTable>\n\t\t\t\t\t\t</gantt:GanttChartContainer>\n\t\t\t\t\t</content>\n\t\t\t\t</Page>\n\t\t\t</mvc:View> \n\t\t', this.shadowRootElement = this.attachShadow({
                mode: "open"
            }), this.shadowRootElement.appendChild(this.template.content.cloneNode(!0)), this.addEventListener("click", (t => {
                t = new Event("onClick"), this.dispatchEvent(t)
            })), this._props = {}
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
            }, this.data_utc_offset = this.initialProperties.data_utc_offset ? this.initialProperties.data_utc_offset : 1), "pause_data_refresh" in e && (this.isDataRefreshPaused = e.pause_data_refresh);
            var i = this;
            this.UI5InitializePromise = new Promise(((e, o) => {
                this.oView ? e() : e(function(e) {
                    let i, o, s = document.createElement("div");
                    if (s.slot = "content-" + e._id, s.style.height = "100%", e.appendChild(s), e.xml_view_definition = e.xml_view_definition.replaceAll("{eventsmodel>Event_Id}", "{eventsmodel>" + e.initialProperties.event_id_field_name + "}").replaceAll("{eventsmodel>Event_Name}", "{eventsmodel>" + e.initialProperties.event_name_field_name + "}"), "" === e.initialProperties.bars_color && e.initialProperties.automatic_bars_text_color) e.xml_view_definition = e.xml_view_definition.replaceAll("{titlecolor}", "");
                    else {
                        let t = "#000000";
                        e.initialProperties.automatic_bars_text_color && "" !== e.initialProperties.bars_color && (t = a(e.initialProperties.bars_color)), e.initialProperties.automatic_bars_text_color || "" === e.initialProperties.bars_text_color || (t = e.initialProperties.bars_text_color), e.xml_view_definition = e.xml_view_definition.replaceAll("{titlecolor}", t)
                    }
                    e.xml_view_definition = e.xml_view_definition.replaceAll("{barsopacity}", "" === e.initialProperties.bars_opacity ? "0.8" : e.initialProperties.bars_opacity), e.initialProperties.dynamic_total_horizon ? (i = n(new Date(Date.now() + 6e4 * e.initialProperties.total_horizon_start_time_shift_in_minutes), "min", 10), o = n(new Date(Date.now() + 6e4 * e.initialProperties.total_horizon_end_time_shift_in_minutes), "max", 10)) : (i = e.initialProperties.horizon_start_time, o = e.initialProperties.horizon_end_time), e.xml_view_definition = e.xml_view_definition.replaceAll("{total_horizon_start}", i), e.xml_view_definition = e.xml_view_definition.replaceAll("{total_horizon_end}", o), e.xml_view_definition = e.xml_view_definition.replaceAll("{visual_horizon_start}", i), e.xml_view_definition = e.xml_view_definition.replaceAll("{visual_horizon_end}", o);
                    let l = JSON.parse(e.initialProperties.table_columns),
                        r = "";
                    for (const {
                            field: t,
                            label: e
                        }
                        of l) r += '<table:Column autoResizable="true">\n\t\t\t\t<Text text="{label}"/>\n\t\t\t\t<table:template>\n\t\t\t\t\t<Label text="{field}"/>\n\t\t\t\t</table:template>\n\t\t\t</table:Column>'.replaceAll("{label}", e).replaceAll("{field}", "{eventsmodel>" + t + "}");
                    e.xml_view_definition = e.xml_view_definition.replaceAll("<columns definition>", r);
                    let _ = e.initialProperties.svg_patterns;
                    const d = document.createElement("div");
                    d.textContent = _, e.xml_view_definition = e.xml_view_definition.replaceAll("<svg patterns definition>", d.innerHTML), sap.ui.getCore().attachInit((function() {
                        sap.ui.define(["jquery.sap.global", "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "sap/gantt/misc/Format"], (function(i, n, o, s) {
                            return n.extend("myView.Template", {
                                onInit: function() {
                                    this.getView().byId("tree_table").bindAggregation("rows", {
                                        path: "eventsmodel>/events",
                                        parameters: {
                                            arrayNames: ["events"],
                                            numberOfExpandedLevels: 0
                                        }
                                    }), this.getView().byId("gantt_task").bindProperty("time", {
                                        path: "eventsmodel>" + e.initialProperties.event_start_time_field_name,
                                        formatter: function(t) {
                                            return new Date(new Date(t).getTime() + 3600 * (e.local_time_utc_offset - e.data_utc_offset) * 1e3)
                                        }
                                    }), this.getView().byId("gantt_task").bindProperty("endTime", {
                                        path: "eventsmodel>" + e.initialProperties.event_end_time_field_name,
                                        formatter: function(t) {
                                            return new Date(new Date(t).getTime() + 3600 * (e.local_time_utc_offset - e.data_utc_offset) * 1e3)
                                        }
                                    });
                                    let i = "eventsmodel>" + ("" !== e.initialProperties.event_color_field_name ? e.initialProperties.event_color_field_name : "NONE");
                                    "" !== e.initialProperties.event_color_field_name && this.getView().byId("gantt_task").bindProperty("strokeWidth", {
                                        path: i,
                                        formatter: function(t) {
                                            return t && t.startsWith("url(") ? 1 : 0
                                        }
                                    }), e.initialProperties.automatic_bars_text_color && this.getView().byId("gantt_task").bindProperty("titleColor", {
                                        path: i,
                                        formatter: function(i) {
                                            return "" !== e.initialProperties.bars_color ? a(e.initialProperties.bars_color) : i && (i.startsWith("#") || i.startsWith("url(")) ? a(i) : a(t)
                                        }
                                    }), this.getView().byId("gantt_task").bindProperty("fill", {
                                        path: i,
                                        formatter: function(i) {
                                            return "" !== e.initialProperties.bars_color ? e.initialProperties.bars_color : i && (i.startsWith("#") || i.startsWith("url(")) ? i : t
                                        }
                                    }), "" !== e.initialProperties.event_tooltip_field_name && this.getView().byId("gantt_task").bindProperty("tooltip", {
                                        path: "eventsmodel>" + e.initialProperties.event_tooltip_field_name
                                    })
                                }
                            })
                        })), e.oView = sap.ui.xmlview("oView-" + e._id, {
                            viewContent: e.xml_view_definition
                        }), e.oView.placeAt(s)
                    }))
                }(i))
            })).then((() => {}))
        }
        setTotalHorizon(t, e) {
            this.oView.byId("zoom_strategy").getTotalHorizon().setStartTime(t), this.oView.byId("zoom_strategy").getTotalHorizon().setEndTime(e)
        }
        setVisualHorizon(t, e) {
            this.oView.byId("zoom_strategy").getVisibleHorizon().setStartTime(t), this.oView.byId("zoom_strategy").getVisibleHorizon().setEndTime(e)
        }
        setEqualTotalAndVisualHorizon(t, e) {
            this.oView.byId("zoom_strategy").getTotalHorizon().setStartTime(t), this.oView.byId("zoom_strategy").getTotalHorizon().setEndTime(e), this.oView.byId("zoom_strategy").getVisibleHorizon().setStartTime(t), this.oView.byId("zoom_strategy").getVisibleHorizon().setEndTime(e)
        }
        setDataSet(t) {
            this.model_data = t, i(this)
        }
        setDataSet(t) {
            this.model_data = t, i(this)
        }
        addEvent(t) {
            let e = {};
            e[this.initialProperties.event_id_field_name] = {
                id: t.id
            }, e[this.initialProperties.event_name_field_name] = {
                id: t.name
            }, e[this.initialProperties.event_tooltip_field_name] = {
                id: t.tooltip
            }, e[this.initialProperties.event_parent_id_field_name] = {
                id: t.parent_id
            }, e[this.initialProperties.event_start_time_field_name] = {
                id: t.start_time
            }, e[this.initialProperties.event_end_time_field_name] = {
                id: t.end_time
            }, e[this.initialProperties.event_color_field_name] = {
                id: t.color
            }, this.manual_data.push(e), i(this)
        }
        addEvents(t) {
            let e = this;
            t.forEach((function(t, i) {
                let n = {};
                n[e.initialProperties.event_id_field_name] = {
                    id: t.id
                }, n[e.initialProperties.event_name_field_name] = {
                    id: t.name
                }, n[e.initialProperties.event_tooltip_field_name] = {
                    id: t.tooltip
                }, n[e.initialProperties.event_parent_id_field_name] = {
                    id: t.parent_id
                }, n[e.initialProperties.event_start_time_field_name] = {
                    id: t.start_time
                }, n[e.initialProperties.event_end_time_field_name] = {
                    id: t.end_time
                }, n[e.initialProperties.event_color_field_name] = {
                    id: t.color
                }, e.manual_data.push(n)
            })), i(this)
        }
        removeManualEvents() {
            this.manual_data = [], i(this)
        }
        removeModelEvents() {
            this.model_data = [], i(this)
        }
        removeAllEvents() {
            this.model_data = [], this.manual_data = [], i(this)
        }
        setTheme(t) {
            sap.ui.getCore().applyTheme(t)
        }
        setBarsColorInversion(t) {
            t ? this.classList.add("custGanttInvertColors") : this.classList.remove("custGanttInvertColors")
        }
        getBarsColorInversion() {
            return this.classList.contains("custGanttInvertColors")
        }
    }

    function i(t) {
        let e = [],
            i = [...t.model_data, ...t.manual_data];
        if (i) {
            if (i.forEach((function(t, i) {
                    let n = {};
                    for (var a in t) {
                        let e = "#" === t[a].id || "@NullMember" === t[a].id ? "" : t[a].id;
                        n[a] = e, n[a + ".id"] = e, n[a + ".description"] = t[a].description
                    }
                    n.events = [], e.push(n)
                })), e.sort((function(e, i) {
                    return new Date(e[t.initialProperties.event_start_time_field_name]) - new Date(i[t.initialProperties.event_start_time_field_name])
                })), e.length > 0 && t.initialProperties.dynamic_visual_horizon) {
                let i = n(new Date(new Date(e[0][t.initialProperties.event_start_time_field_name]).getTime() + 3600 * (t.local_time_utc_offset - t.data_utc_offset) * 1e3), "min", 10),
                    a = n(new Date(new Date(e[e.length - 1][t.initialProperties.event_end_time_field_name]).getTime() + 3600 * (t.local_time_utc_offset - t.data_utc_offset) * 1e3), "max", 10);
                t.oView.byId("zoom_strategy").getVisibleHorizon().setStartTime(i), t.oView.byId("zoom_strategy").getVisibleHorizon().setEndTime(a)
            }
            const a = t.initialProperties.compact_mode;
            e.forEach((function(i, n) {
                let o = [];
                o.push(Object.assign({}, i)), a && e.forEach((function(e, a) {
                    a > n && i[t.initialProperties.event_id_field_name] === e[t.initialProperties.event_id_field_name] && (o.push(Object.assign({}, e)), e.toDelete = !0)
                })), i.subtask = o
            }));
            for (let t = e.length - 1; t >= 0; t--) e[t].toDelete && e.splice(t, 1);
            e.forEach((function(i, n) {
                let a = [];
                e.forEach((function(e, n) {
                    i[t.initialProperties.event_id_field_name] === e[t.initialProperties.event_parent_id_field_name] && a.push(Object.assign({}, e))
                })), i.events = a
            })), e.forEach((function(t, e) {
                0 === t.events.length && delete t.events
            }));
            for (let i = e.length - 1; i >= 0; i--) e[i][t.initialProperties.event_parent_id_field_name] && "" !== e[i][t.initialProperties.event_parent_id_field_name] && e.splice(i, 1)
        }
        let a = {
                events: e
            },
            o = new sap.ui.model.json.JSONModel(a);
        t.oView.setModel(o, "eventsmodel")
    }

    function n(t, e, i) {
        let n = t.getMinutes();
        "min" === e && (t = new Date(t.getTime() - n % i * 6e4)), "max" === e && (t = new Date(t.getTime() + 6e4 * (i - n % i)));
        let a = t.getMonth() + 1,
            o = t.getDate(),
            s = t.getHours();
        return n = t.getMinutes(), [t.getFullYear(), (a > 9 ? "" : "0") + a, (o > 9 ? "" : "0") + o, (s > 9 ? "" : "0") + s, (n > 9 ? "" : "0") + n, "00"].join("")
    }

    function a(t) {
        return t.startsWith("url(") ? "#000000" : t.startsWith("#") ? (.299 * parseInt(t.slice(1, 3), 16) + .587 * parseInt(t.slice(3, 5), 16) + .114 * parseInt(t.slice(5, 7), 16)) / 255 > .5 ? "#000000" : "#FFFFFF" : "#000000"
    }
    customElements.define("ui5-gantt-chart", e)
}();