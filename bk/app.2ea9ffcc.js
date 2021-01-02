(function (e) {
  function t(t) {
    for (var a, o, i = t[0], _ = t[1], u = t[2], l = 0, p = []; l < i.length; l++) o = i[l],
      Object.prototype.hasOwnProperty.call(n, o) && n[o] && p.push(n[o][0]),
      n[o] = 0;
    for (a in _) Object.prototype.hasOwnProperty.call(_, a) && (e[a] = _[a]);
    c && c(t);
    while (p.length) p.shift()();
    return s.push.apply(s, u || []),
      r()
  }
  function r() {
    for (var e, t = 0; t < s.length; t++) {
      for (var r = s[t], a = !0, i = 1; i < r.length; i++) {
        var _ = r[i];
        0 !== n[_] && (a = !1)
      }
      a && (s.splice(t--, 1), e = o(o.s = r[0]))
    }
    return e
  }
  var a = {},
    n = {
      app: 0
    },
    s = [];
  function o(t) {
    if (a[t]) return a[t].exports;
    var r = a[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(r.exports, r, r.exports, o),
      r.l = !0,
      r.exports
  }
  o.m = e,
    o.c = a,
    o.d = function (e, t, r) {
      o.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      })
    },
    o.r = function (e) {
      "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }),
        Object.defineProperty(e, "__esModule", {
          value: !0
        })
    },
    o.t = function (e, t) {
      if (1 & t && (e = o(e)), 8 & t) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (o.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var a in e) o.d(r, a,
        function (t) {
          return e[t]
        }.bind(null, a));
      return r
    },
    o.n = function (e) {
      var t = e && e.__esModule ?
        function () {
          return e["default"]
        } : function () {
          return e
        };
      return o.d(t, "a", t),
        t
    },
    o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    },
    o.p = "/";
  var i = window["webpackJsonp"] = window["webpackJsonp"] || [],
    _ = i.push.bind(i);
  i.push = t,
    i = i.slice();
  for (var u = 0; u < i.length; u++) t(i[u]);
  var c = _;
  s.push([0, "chunk-vendors"]),
    r()
})({
  0: function (e, t, r) {
    e.exports = r("56d7")
  },
  "0134": function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a15b"),
      core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__),
      core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("d81d"),
      core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__),
      core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("a9e3"),
      core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_2__),
      regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("96cf"),
      regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__),
      C_Users_Jhin_Yu_Desktop_52tyre_daping_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("1da1"),
      AMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("024c"),
      AMap__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(AMap__WEBPACK_IMPORTED_MODULE_5__),
      echarts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("313e"),
      echarts__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_6__),
      mqtt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("e7fc"),
      mqtt__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(mqtt__WEBPACK_IMPORTED_MODULE_7__);
    __webpack_exports__["a"] = {
      name: "Home",
      props: {},
      data: function () {
        return {
          client: null,
          tyreID: "TTI000000000001",
          tyreTemperatureChart: null,
          tyreTemperatureChart1: null,
          tyreTemperatureChart2: null,
          tyreTemperatureChart3: null,
          tyreTemperatureChart4: null,
          tyrePressureChart: null,
          tyrePressureChart1: null,
          tyrePressureChart2: null,
          tyrePressureChart3: null,
          tyrePressureChart4: null,
          isSelected: "1",
          isSelected1: "1",
          minutesArr: ["00-10", "10-20", "20-30", "30-40", "40-50", "50-60"],
          hoursArr: ["00-04", "04-08", "08-12", "12-16", "16-20", "20-24"],
          threeDaysArr: ["1", "2", "3"],
          weeksArr: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          daysArr: ["1", "2", "3", "4", "5", "6", "7"],
          newHistoryData: null,
          timer: null,
          xAxisName: "分段",
          tpmsInfo: "tpmsInfo/TTI000000000001",
          gpsinfo: "gpsInfo/TTI000000000001",
          lng: "",
          lat: "",
          address: "",
          interval: null,
          timeStamp: null
        }
      },
      filters: {
        fixed: function (e) {
          return Math.floor(100 * Number(e)) / 100
        }
      },
      created: function () { },
      mounted: function () {
        var e = this;
        e.createTyreChart1("tyreTemperatureInfo1"),
          e.createTyreChart1("tyrePressureInfo1"),
          e.createTyreChart2("tyreTemperatureInfo2"),
          e.createTyreChart2("tyrePressureInfo2"),
          e.createTyreChart3("tyreTemperatureInfo3"),
          e.createTyreChart3("tyrePressureInfo3"),
          e.createTyreChart4("tyreTemperatureInfo4"),
          e.createTyreChart4("tyrePressureInfo4"),
          e.createTyreChart5("tyreTemperature"),
          e.createTyreChart5("tyrePressure"),
          e.mqttClient(),
          e.drawEcharts(),
          this.timer = setInterval(e.drawEcharts, 6e5)
      },
      beforeDestroy: function () {
        this.client.unsubscribe("tpmsInfo/" + this.tyreID),
          clearInterval(this.timer)
      },
      methods: {
        mqttClient: function () {
          var e = this;
          e.client = Object(mqtt__WEBPACK_IMPORTED_MODULE_7__["connect"])("ws://47.110.57.65:7410"),
            e.client.on("connect", (function (t) {
              console.log("成功连接服务器", t),
                e.client.subscribe([e.tpmsInfo, e.gpsinfo], {
                  qos: 0
                },
                  (function (e) {
                    e ? console.log("订阅失败") : console.log("订阅成功")
                  }))
            })),
            e.client.on("message", (function (t, r) {
              console.log("收到来自", t, "的消息------", JSON.parse(r)),
                e.clearinterval(),
                t === e.tpmsInfo ? (e.getTyreChart5("tyreTemperature", JSON.parse(r).tyreTemperature), e.getTyreChart5("tyrePressure", JSON.parse(r).tyrePressure)) : e.convertFrom(JSON.parse(r)),
                t && (e.timeStamp = (new Date).getTime(), e.interval = setInterval((function () {
                  console.log("清空左边的图"),
                    e.convertFrom("", !0),
                    e.getTyreChart5("", "", !0),
                    e.clearinterval()
                }), 10200))
            })),
            e.client.on("reconnect", (function (e) {
              console.log("正在重连:", e)
            })),
            e.client.on("error", (function (e) {
              console.log("连接失败:", e)
            }))
        },
        clearinterval: function () {
          clearInterval(this.interval),
            this.timeStamp = null
        },
        convertFrom: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (t) return this.lng = "",
            this.lat = "",
            void (this.address = "");
          var r = this,
            a = e.longitude,
            n = e.latitude;
          AMap__WEBPACK_IMPORTED_MODULE_5___default.a.convertFrom([a, n], "gps", (function (e, t) {
            if ("ok" === t.info) {
              var a = t.locations;
              AMap__WEBPACK_IMPORTED_MODULE_5___default.a.plugin("AMap.Geocoder", (function () {
                var e = new AMap__WEBPACK_IMPORTED_MODULE_5___default.a.Geocoder,
                  t = [a[0].lng, a[0].lat];
                e.getAddress(t, (function (e, t) {
                  "complete" === e && "OK" === t.info && "OK" === t.info && (r.lng = a[0].lng, r.lat = a[0].lat, r.address = t.regeocode.formattedAddress)
                }))
              }))
            }
          }))
        },
        drawEcharts: function () {
          var e = this;
          return Object(C_Users_Jhin_Yu_Desktop_52tyre_daping_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["a"])(regeneratorRuntime.mark((function t() {
            var r, a, n, s, o, i, _;
            return regeneratorRuntime.wrap((function (t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e,
                    t.next = 3,
                    r.getDataByHours();
                case 3:
                  return a = t.sent,
                    t.next = 6,
                    r.getDataByTime("4");
                case 6:
                  n = t.sent,
                    s = [],
                    o = [],
                    n.tyreTemperature.map((function (e) {
                      s.push(JSON.parse(e))
                    })),
                    n.tyrePressure.map((function (e) {
                      o.push(JSON.parse(e))
                    })),
                    i = {
                      tpmsAbnormalNum: n.tpmsAbnormalNum,
                      tpmsNormalNum: n.tpmsNormalNum
                    },
                    _ = {
                      highPressure: n.highPressure,
                      lowPressure: n.lowPressure,
                      pressure: n.pressure
                    },
                    r.getTyreChart1("tyreTemperatureInfo1", e.minutesArr, a.tyreTemperature, "1"),
                    r.getTyreChart1("tyrePressureInfo1", e.minutesArr, a.tyrePressure, "1"),
                    r.getTyreChart2("tyreTemperatureInfo2", e.daysArr, s),
                    r.getTyreChart2("tyrePressureInfo2", e.daysArr, o),
                    r.getTyreChart3("tyreTemperatureInfo3", i),
                    r.getTyreChart3("tyrePressureInfo3", _),
                    r.getTyreChart4("tyreTemperatureInfo4", e.daysArr, s),
                    r.getTyreChart4("tyrePressureInfo4", e.daysArr, o);
                case 21:
                case "end":
                  return t.stop()
              }
            }), t)
          })))()
        },
        createTyreChart1: function (e) {
          "tyreTemperatureInfo1" == e ? this.tyreTemperatureChart1 = echarts__WEBPACK_IMPORTED_MODULE_6___default.a.init(document.getElementById(e)) : "tyrePressureInfo1" == e && (this.tyrePressureChart1 = echarts__WEBPACK_IMPORTED_MODULE_6___default.a.init(document.getElementById(e)))
        },
        createTyreChart2: function (e) {
          "tyreTemperatureInfo2" == e ? this.tyreTemperatureChart2 = echarts__WEBPACK_IMPORTED_MODULE_6___default.a.init(document.getElementById(e)) : "tyrePressureInfo2" == e && (this.tyrePressureInfo2 = echarts__WEBPACK_IMPORTED_MODULE_6___default.a.init(document.getElementById(e)))
        },
        createTyreChart3: function (e) {
          "tyreTemperatureInfo3" == e ? this.tyreTemperatureChart3 = echarts__WEBPACK_IMPORTED_MODULE_6___default.a.init(document.getElementById(e)) : "tyrePressureInfo3" == e && (this.tyrePressureInfo3 = echarts__WEBPACK_IMPORTED_MODULE_6___default.a.init(document.getElementById(e)))
        },
        createTyreChart4: function (e) {
          "tyreTemperatureInfo4" == e ? this.tyreTemperatureChart4 = echarts__WEBPACK_IMPORTED_MODULE_6___default.a.init(document.getElementById(e)) : "tyrePressureInfo4" == e && (this.tyrePressureInfo4 = echarts__WEBPACK_IMPORTED_MODULE_6___default.a.init(document.getElementById(e)))
        },
        createTyreChart5: function (e) {
          "tyreTemperature" == e ? this.tyreTemperatureChart = echarts__WEBPACK_IMPORTED_MODULE_6___default.a.init(document.getElementById(e)) : "tyrePressure" == e && (this.tyrePressureChart = echarts__WEBPACK_IMPORTED_MODULE_6___default.a.init(document.getElementById(e)))
        },
        getTyreChart1: function (e, t, r, a) {
          "tyreTemperatureInfo1" == e ? this.tyreTemperatureChart1.setOption(this.getOption1(e, t, r, a)) : "tyrePressureInfo1" == e && this.tyrePressureChart1.setOption(this.getOption1(e, t, r, a))
        },
        getTyreChart2: function (e, t, r) {
          "tyreTemperatureInfo2" == e ? this.tyreTemperatureChart2.setOption(this.getOption2(e, t, r)) : "tyrePressureInfo2" == e && this.tyrePressureInfo2.setOption(this.getOption2(e, t, r))
        },
        getTyreChart3: function (e, t) {
          "tyreTemperatureInfo3" == e ? this.tyreTemperatureChart3.setOption(this.getOption3(e, t)) : "tyrePressureInfo3" == e && this.tyrePressureInfo3.setOption(this.getOption3(e, t))
        },
        getTyreChart4: function (e, t, r) {
          "tyreTemperatureInfo4" == e ? this.tyreTemperatureChart4.setOption(this.getOption4(e, t, r)) : "tyrePressureInfo4" == e && this.tyrePressureInfo4.setOption(this.getOption4(e, t, r))
        },
        getTyreChart5: function (e, t) {
          var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (r) return this.tyreTemperatureChart.clear(),
            void this.tyrePressureChart.clear();
          "tyreTemperature" == e ? this.tyreTemperatureChart.setOption(this.getOption5(e, t)) : "tyrePressure" == e && this.tyrePressureChart.setOption(this.getOption5(e, t))
        },
        getOption1: function (e, t, r, a) {
          var n, s, o, i = [];
          r.map((function (t) {
            "1" == a ? i.push({
              value: t.mean,
              other: {
                max: t.max,
                min: t.min
              }
            }) : i.push({
              value: "tyreTemperatureInfo1" == e ? t.tyreTemperature_mean : t.tyrePressure_mean,
              other: {
                max: "tyreTemperatureInfo1" == e ? t.tyreTemperature_max : t.tyrePressure_max,
                min: "tyreTemperatureInfo1" == e ? t.tyreTemperature_min : t.tyrePressure_min
              }
            })
          })),
            "tyreTemperatureInfo1" == e ? (n = [0, 20, 40, 60, 80, 100], s = 100, o = "℃") : "tyrePressureInfo1" == e && (n = [0, 3, 6, 9, 12, 15], s = 15, o = "bar");
          var _ = {
            textStyle: {
              color: "#a9a9a9"
            },
            title: {
              text: "历史数据趋势",
              left: "center",
              bottom: "left",
              textStyle: {
                color: "#a9a9a9"
              }
            },
            xAxis: {
              boundaryGap: !1,
              data: t,
              name: this.xAxisName
            },
            yAxis: {
              type: "value",
              data: n,
              min: 0,
              max: s,
              boundaryGap: !1,
              axisLabel: {
                formatter: "{value}" + o
              },
              axisLine: {
                lineStyle: {
                  color: ["transparent"]
                }
              },
              splitLine: {
                show: !0,
                lineStyle: {
                  color: ["#585858"],
                  opacity: .4
                }
              }
            },
            grid: {
              left: "13%",
              width: "75%"
            },
            tooltip: {
              trigger: "item",
              formatter: function (e) {
                return console.log("params", e.data),
                  "平均：" + e.data.value + o + "<br/>最高：" + e.data.other.max + o + "<br/>最低：" + e.data.other.min + o
              }
            },
            series: [{
              name: "胎温",
              type: "line",
              smooth: !0,
              showSymbol: !0,
              symbol: "circle",
              symbolSize: 5,
              sampling: "average",
              itemStyle: {
                color: "#7BCFFD"
              },
              lineStyle: {
                color: "#7BCFFD"
              },
              areaStyle: {
                color: new echarts__WEBPACK_IMPORTED_MODULE_6___default.a.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: "rgba(123,207,253,0.33)"
                },
                {
                  offset: 1,
                  color: "rgba(4,15,36,0.28)"
                }])
              },
              data: i
            }]
          };
          return _
        },
        getOption2: function (e, t, r) {
          var a, n = [],
            s = [];
          r.map((function (e) {
            n.push(e.normalNum / 1e4),
              s.push(e.abnormalNum / 1e4)
          })),
            "tyreTemperatureInfo2" == e ? a = "胎温异常次数统计" : "tyrePressureInfo2" == e && (a = "胎压异常次数统计");
          var o = {
            textStyle: {
              color: "#a9a9a9"
            },
            title: {
              text: a,
              left: "center",
              bottom: "left",
              textStyle: {
                color: "#a9a9a9"
              }
            },
            tooltip: {},
            legend: {
              textStyle: {
                color: "#a9a9a9"
              },
              data: ["正常次数", "异常次数"]
            },
            xAxis: {
              data: t,
              name: "天"
            },
            yAxis: {
              type: "value",
              min: 0,
              axisLine: {
                lineStyle: {
                  color: ["transparent"]
                }
              },
              axisLabel: {
                formatter: "{value}w"
              },
              splitLine: {
                show: !0,
                lineStyle: {
                  color: ["#585858"],
                  opacity: .4
                }
              }
            },
            grid: {
              left: "15%"
            },
            series: [{
              type: "bar",
              name: "正常次数",
              data: n,
              itemStyle: {
                color: new echarts__WEBPACK_IMPORTED_MODULE_6___default.a.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: "#AFE6FF"
                },
                {
                  offset: 1,
                  color: "#50B9FF"
                }])
              }
            },
            {
              type: "bar",
              name: "异常次数",
              data: s,
              itemStyle: {
                color: new echarts__WEBPACK_IMPORTED_MODULE_6___default.a.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: "#FEF8E7"
                },
                {
                  offset: 1,
                  color: "#F5B700"
                }])
              }
            }]
          };
          return o
        },
        getOption3: function getOption3(elementId, newData) {
          var textValue, textArr = [],
            seriesName,
            dataValue = [],
            colorList = [];
          if ("tyreTemperatureInfo3" == elementId) {
            textValue = "胎温异常分布统计",
              textArr = ["正常", "偏高"],
              seriesName = "胎温数据";
            var tpmsNormalNum = eval(newData.tpmsNormalNum.join("+")),
              tpmsAbnormalNum = eval(newData.tpmsAbnormalNum.join("+"));
            dataValue = [{
              value: tpmsNormalNum,
              name: "正常"
            },
            {
              value: tpmsAbnormalNum,
              name: "偏高"
            }],
              colorList = [{
                c1: "#3486FC",
                c2: "#59AAFB"
              },
              {
                c1: "#F9E5A2",
                c2: "#FFAD43"
              }]
          } else if ("tyrePressureInfo3" == elementId) {
            textValue = "胎压异常分布统计",
              textArr = ["正常", "偏低", "偏高"],
              seriesName = "胎压数据";
            var lowPressure = eval(newData.lowPressure.join("+")),
              highPressure = eval(newData.highPressure.join("+")),
              pressure = eval(newData.pressure.join("+"));
            dataValue = [{
              value: pressure,
              name: "正常"
            },
            {
              value: lowPressure,
              name: "偏低"
            },
            {
              value: highPressure,
              name: "偏高"
            }],
              colorList = [{
                c1: "#3486FC",
                c2: "#59AAFB"
              },
              {
                c1: "#C4F7FF",
                c2: "#43E4FF"
              },
              {
                c1: "#F9E5A2",
                c2: "#FFAD43"
              }]
          }
          var tyreOption3 = {
            textStyle: {
              color: "#FFF"
            },
            title: {
              text: textValue,
              left: "center",
              bottom: "left",
              textStyle: {
                color: "#a9a9a9"
              }
            },
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
              textStyle: {
                color: "#a9a9a9"
              },
              data: textArr
            },
            grid: {
              left: "13%"
            },
            series: [{
              name: seriesName,
              type: "pie",
              radius: ["30%", "70%"],
              avoidLabelOverlap: !1,
              label: {
                show: !1,
                position: "center"
              },
              labelLine: {
                show: !1
              },
              data: dataValue,
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              },
              itemStyle: {
                normal: {
                  color: function (e) {
                    return new echarts__WEBPACK_IMPORTED_MODULE_6___default.a.graphic.LinearGradient(1, 0, 0, 0, [{
                      offset: 0,
                      color: colorList[e.dataIndex].c1
                    },
                    {
                      offset: 1,
                      color: colorList[e.dataIndex].c2
                    }])
                  },
                  borderWidth: 15,
                  borderColor: "rgba(20,35,83,1)"
                }
              }
            }]
          };
          return tyreOption3
        },
        getOption4: function (e, t, r) {
          for (var a, n, s, o, i = [], _ = 0; _ < 7; _++) for (var u = 0; u < 6; u++) r[_] && "{}" != JSON.stringify(r[_]) && r[_].data[u] ? "tyreTemperatureInfo4" == e ? i.push([_, u, r[_].data[u + 1].tyreTemperature_mean || 0]) : "tyrePressureInfo4" == e && i.push([_, u, r[_].data[u + 1].tyrePressure_mean || 0]) : i.push([_, u, 0]);
          "tyreTemperatureInfo4" == e ? (a = "近7天胎温数据", o = "胎温数据", n = 200, s = ["#40B2FF", "#FDD57D"]) : "tyrePressureInfo4" == e && (a = "近7天胎压数据", o = "胎压数据", n = 15, s = ["#87EEFF", "#87EEFF", "#40B2FF", "#FDD57D"]);
          var c = {
            textStyle: {
              color: "#a9a9a9"
            },
            title: {
              text: a,
              left: "center",
              bottom: "left",
              textStyle: {
                color: "#a9a9a9"
              }
            },
            tooltip: {
              position: "top"
            },
            grid: {
              left: "13%"
            },
            xAxis: {
              type: "category",
              data: t,
              name: "天",
              splitArea: {
                show: !0
              }
            },
            yAxis: {
              type: "category",
              data: this.hoursArr,
              name: "时段",
              splitArea: {
                show: !0
              }
            },
            visualMap: {
              min: 0,
              max: n,
              calculable: !0,
              orient: "horizontal",
              left: "center",
              top: "-1%",
              textStyle: {
                color: "#a9a9a9"
              },
              inRange: {
                color: s
              }
            },
            series: [{
              name: o,
              type: "heatmap",
              data: i,
              label: {
                show: !1
              },
              itemStyle: {
                borderWidth: 15,
                borderColor: "rgba(17,29,68,1)"
              },
              emphasis: {
                itemStyle: {
                  borderWidth: 6,
                  shadowBlur: 10
                }
              }
            }]
          };
          return c
        },
        getOption5: function (e, t) {
          var r, a, n, s, o, i;
          "tyreTemperature" == e ? (r = t, i = "胎温", a = 200, n = 20, s = 13, o = [[.4, new echarts__WEBPACK_IMPORTED_MODULE_6___default.a.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: "rgb(0,255,58)"
          },
          {
            offset: 1,
            color: "rgb(210,255,125)"
          }])], [1, new echarts__WEBPACK_IMPORTED_MODULE_6___default.a.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: "rgb(255,208,100)"
          },
          {
            offset: 1,
            color: "rgb(255,245,135)"
          }])]]) : "tyrePressure" == e && (r = t, i = "胎压", a = 15, n = 15, s = 20, o = [[.4, new echarts__WEBPACK_IMPORTED_MODULE_6___default.a.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: "rgb(255,208,100)"
          },
          {
            offset: 1,
            color: "rgb(255,135,30)"
          }])], [.75, new echarts__WEBPACK_IMPORTED_MODULE_6___default.a.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: "rgb(0,255,58)"
          },
          {
            offset: 1,
            color: "rgb(210,255,125)"
          }])], [1, new echarts__WEBPACK_IMPORTED_MODULE_6___default.a.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: "rgb(255,208,100)"
          },
          {
            offset: 1,
            color: "rgb(255,245,135)"
          }])]]);
          var _ = {
            textStyle: {
              color: "#FFF"
            },
            series: [{
              name: "实时数据",
              type: "gauge",
              max: a,
              splitNumber: n,
              detail: {
                formatter: i + "  {value}",
                show: !0,
                offsetCenter: ["0", "155%"],
                fontStyle: "normal",
                fontWeight: "bolder",
                color: "#52BAFF",
                fontSize: "22"
              },
              data: [{
                value: r,
                name: "Percent"
              }],
              radius: "60%",
              legendHoverLink: !0,
              startAngle: 90,
              endAngle: -269,
              axisLine: {
                show: !0,
                lineStyle: {
                  width: 15,
                  color: o
                }
              },
              splitLine: {
                show: !0,
                length: 20,
                lineStyle: {
                  width: s,
                  color: "rgba(13, 30, 82, 1)"
                }
              },
              axisTick: {
                show: !1
              },
              axisLabel: {
                show: !1,
                fontWeight: "normal",
                borderWidth: 0
              },
              pointer: {
                show: !0,
                length: "45",
                width: "8"
              },
              itemStyle: {
                opacity: .5
              },
              title: {
                show: !1,
                fontSize: 20,
                offsetCenter: ["0", "100%"]
              },
              markPoint: {
                data: [{
                  type: "max"
                }]
              }
            }]
          };
          return _
        },
        selectedTime: function (e, t) {
          var r = this;
          return Object(C_Users_Jhin_Yu_Desktop_52tyre_daping_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["a"])(regeneratorRuntime.mark((function a() {
            var n, s, o, i;
            return regeneratorRuntime.wrap((function (a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  if (n = r, i = [], "1" != e) {
                    a.next = 8;
                    break
                  }
                  return a.next = 5,
                    n.getDataByHours();
                case 5:
                  o = a.sent,
                    a.next = 11;
                  break;
                case 8:
                  return a.next = 10,
                    n.getDataByTime(e);
                case 10:
                  o = a.sent;
                case 11:
                  "tyreTemperature" == t ? (n.isSelected = e, s = "tyreTemperatureInfo1", "1" != e ? o.tyreTemperature.map((function (e) {
                    i.push(JSON.parse(e))
                  })) : i = o.tyreTemperature) : "tyrePressure" == t && (n.isSelected1 = e, s = "tyrePressureInfo1", "1" != e ? o.tyrePressure.map((function (e) {
                    i.push(JSON.parse(e))
                  })) : i = o.tyrePressure),
                    a.t0 = e,
                    a.next = "1" === a.t0 ? 15 : "2" === a.t0 ? 18 : "3" === a.t0 ? 21 : "4" === a.t0 ? 24 : 27;
                  break;
                case 15:
                  return n.xAxisName = "分段",
                    n.getTyreChart1(s, n.minutesArr, i, e),
                    a.abrupt("break", 27);
                case 18:
                  return n.xAxisName = "时段",
                    n.getTyreChart1(s, n.hoursArr, i[0].data, e),
                    a.abrupt("break", 27);
                case 21:
                  return n.xAxisName = "天",
                    n.getTyreChart1(s, n.threeDaysArr, i, e),
                    a.abrupt("break", 27);
                case 24:
                  return n.xAxisName = "天",
                    n.getTyreChart1(s, n.daysArr, i, e),
                    a.abrupt("break", 27);
                case 27:
                case "end":
                  return a.stop()
              }
            }), a)
          })))()
        },
        getDataByHours: function () {
          var e = this;
          return Object(C_Users_Jhin_Yu_Desktop_52tyre_daping_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["a"])(regeneratorRuntime.mark((function t() {
            var r;
            return regeneratorRuntime.wrap((function (t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = {
                    tyreID: e.tyreID
                  },
                    t.next = 3,
                    e.$http.post(e.$serverAPI["根据时间获取胎温胎压"], r).then((function (e) {
                      if (0 == e.state) return e.result
                    }), (function (e) {
                      console.log(e)
                    }));
                case 3:
                  return t.abrupt("return", t.sent);
                case 4:
                case "end":
                  return t.stop()
              }
            }), t)
          })))()
        },
        getDataByTime: function (e) {
          var t = this;
          return Object(C_Users_Jhin_Yu_Desktop_52tyre_daping_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["a"])(regeneratorRuntime.mark((function r() {
            var a;
            return regeneratorRuntime.wrap((function (r) {
              while (1) switch (r.prev = r.next) {
                case 0:
                  return a = {
                    tyreID: t.tyreID,
                    day: "2" == e ? "1" : "3" == e ? "3" : "4" == e ? "7" : ""
                  },
                    r.next = 3,
                    t.$http.post(t.$serverAPI["根据天数获取胎温胎压"], a).then((function (e) {
                      if (0 == e.state) return t.newHistoryData = e.result,
                        e.result
                    }), (function (e) {
                      console.log(e)
                    }));
                case 3:
                  return r.abrupt("return", r.sent);
                case 4:
                case "end":
                  return r.stop()
              }
            }), r)
          })))()
        }
      }
    }
  },
  "024c": function (e, t) {
    e.exports = window.AMap
  },
  "034f": function (e, t, r) {
    "use strict";
    r("85ec")
  },
  1: function (e, t) { },
  2: function (e, t) { },
  3: function (e, t) { },
  4: function (e, t) { },
  5: function (e, t) { },
  5138: function (e, t, r) { },
  "56d7": function (e, t, r) {
    "use strict";
    r.r(t);
    r("e260"),
      r("e6cf"),
      r("cca6"),
      r("a79d");
    var a = r("2b0e"),
      n = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r("div", {
          attrs: {
            id: "app"
          }
        },
          [r("Home")], 1)
      },
      s = [],
      o = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a("div", {
          staticClass: "contentWrap"
        },
          [a("div", {
            staticClass: "content"
          },
            [a("div", {
              staticClass: "leftContent"
            },
              [a("div", {
                staticClass: "leftWrap"
              },
                [e._m(0), e._m(1), a("div", {
                  staticClass: "tyreDashboard"
                },
                  [e._m(2), a("div", {
                    staticClass: "_bottom"
                  },
                    [a("div", [a("span", [e._v("东经" + e._s(e._f("fixed")(e.lng)))]), a("span", [e._v("北纬" + e._s(e._f("fixed")(e.lat)))])]), a("div", [a("img", {
                      attrs: {
                        src: r("b226"),
                        alt: "",
                        srcset: ""
                      }
                    }), a("div", [e._v(e._s(e.address))])])])])])]), a("div", {
                      staticClass: "rightContent"
                    },
                      [a("div", {
                        staticClass: "tyreInfo"
                      },
                        [a("div", {
                          staticClass: "tyreCharts"
                        },
                          [a("div", {
                            staticClass: "tyreTemperatureInfoMore",
                            staticStyle: {
                              width: "27%"
                            }
                          },
                            [a("div", {
                              staticClass: "tyreTemperatureInfo",
                              staticStyle: {
                                width: "100%"
                              },
                              attrs: {
                                id: "tyreTemperatureInfo1"
                              }
                            }), a("div", {
                              staticClass: "innerWrap"
                            },
                              [a("div", {
                                staticClass: "inner"
                              },
                                [a("div", {
                                  class: ["1" == e.isSelected ? "selected" : ""],
                                  on: {
                                    click: function (t) {
                                      return t.stopPropagation(),
                                        e.selectedTime("1", "tyreTemperature")
                                    }
                                  }
                                },
                                  [e._v(" 过去一小时 ")]), a("div", {
                                    class: ["2" == e.isSelected ? "selected" : ""],
                                    on: {
                                      click: function (t) {
                                        return t.stopPropagation(),
                                          e.selectedTime("2", "tyreTemperature")
                                      }
                                    }
                                  },
                                    [e._v(" 过去一天 ")]), a("div", {
                                      class: ["3" == e.isSelected ? "selected" : ""],
                                      on: {
                                        click: function (t) {
                                          return t.stopPropagation(),
                                            e.selectedTime("3", "tyreTemperature")
                                        }
                                      }
                                    },
                                      [e._v(" 过去三天 ")]), a("div", {
                                        class: ["4" == e.isSelected ? "selected" : ""],
                                        on: {
                                          click: function (t) {
                                            return t.stopPropagation(),
                                              e.selectedTime("4", "tyreTemperature")
                                          }
                                        }
                                      },
                                        [e._v(" 过去一周 ")])])])]), a("div", {
                                          staticClass: "tyreTemperatureInfo",
                                          staticStyle: {
                                            width: "27%"
                                          },
                                          attrs: {
                                            id: "tyreTemperatureInfo2"
                                          }
                                        }), a("div", {
                                          staticClass: "tyreTemperatureInfo",
                                          staticStyle: {
                                            width: "16%"
                                          },
                                          attrs: {
                                            id: "tyreTemperatureInfo3"
                                          }
                                        }), a("div", {
                                          staticClass: "tyreTemperatureInfo",
                                          staticStyle: {
                                            width: "30%"
                                          },
                                          attrs: {
                                            id: "tyreTemperatureInfo4"
                                          }
                                        })])]), a("div", {
                                          staticClass: "tyreInfo"
                                        },
                                          [a("div", {
                                            staticClass: "tyreCharts"
                                          },
                                            [a("div", {
                                              staticClass: "tyreTemperatureInfoMore",
                                              staticStyle: {
                                                width: "27%"
                                              }
                                            },
                                              [a("div", {
                                                staticClass: "tyreTemperatureInfo",
                                                staticStyle: {
                                                  width: "100%"
                                                },
                                                attrs: {
                                                  id: "tyrePressureInfo1"
                                                }
                                              }), a("div", {
                                                staticClass: "innerWrap"
                                              },
                                                [a("div", {
                                                  staticClass: "inner"
                                                },
                                                  [a("div", {
                                                    class: ["1" == e.isSelected1 ? "selected" : ""],
                                                    on: {
                                                      click: function (t) {
                                                        return t.stopPropagation(),
                                                          e.selectedTime("1", "tyrePressure")
                                                      }
                                                    }
                                                  },
                                                    [e._v(" 过去一小时 ")]), a("div", {
                                                      class: ["2" == e.isSelected1 ? "selected" : ""],
                                                      on: {
                                                        click: function (t) {
                                                          return t.stopPropagation(),
                                                            e.selectedTime("2", "tyrePressure")
                                                        }
                                                      }
                                                    },
                                                      [e._v(" 过去一天 ")]), a("div", {
                                                        class: ["3" == e.isSelected1 ? "selected" : ""],
                                                        on: {
                                                          click: function (t) {
                                                            return t.stopPropagation(),
                                                              e.selectedTime("3", "tyrePressure")
                                                          }
                                                        }
                                                      },
                                                        [e._v(" 过去三天 ")]), a("div", {
                                                          class: ["4" == e.isSelected1 ? "selected" : ""],
                                                          on: {
                                                            click: function (t) {
                                                              return t.stopPropagation(),
                                                                e.selectedTime("4", "tyrePressure")
                                                            }
                                                          }
                                                        },
                                                          [e._v(" 过去一周 ")])])])]), a("div", {
                                                            staticClass: "tyreTemperatureInfo",
                                                            staticStyle: {
                                                              width: "27%"
                                                            },
                                                            attrs: {
                                                              id: "tyrePressureInfo2"
                                                            }
                                                          }), a("div", {
                                                            staticClass: "tyreTemperatureInfo",
                                                            staticStyle: {
                                                              width: "16%"
                                                            },
                                                            attrs: {
                                                              id: "tyrePressureInfo3"
                                                            }
                                                          }), a("div", {
                                                            staticClass: "tyreTemperatureInfo",
                                                            staticStyle: {
                                                              width: "30%"
                                                            },
                                                            attrs: {
                                                              id: "tyrePressureInfo4"
                                                            }
                                                          })])])])])])
      },
      i = [function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a("div", {
          staticClass: "title"
        },
          [a("img", {
            attrs: {
              src: r("a105"),
              alt: ""
            }
          })])
      },
      function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r("div", {
          staticClass: "tyreBrand"
        },
          [r("div", [e._v("13R22.5-18")]), r("div", [e._v("DSR188")])])
      },
      function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r("div", {
          staticClass: "_top"
        },
          [r("div", {
            staticClass: "tyreInfoWrap"
          },
            [r("div", {
              attrs: {
                id: "tyreTemperature"
              }
            }), r("div", {
              staticClass: "circle1 circlePublic"
            },
              [r("div", {
                staticClass: "circleWrap"
              },
                [r("div", {
                  staticClass: "circle"
                })])])]), r("div", {
                  staticClass: "tyreInfoWrap"
                },
                  [r("div", {
                    attrs: {
                      id: "tyrePressure"
                    }
                  }), r("div", {
                    staticClass: "circle2 circlePublic"
                  },
                    [r("div", {
                      staticClass: "circleWrap"
                    },
                      [r("div", {
                        staticClass: "circle"
                      })])])])])
      }],
      _ = r("0134"),
      u = _["a"],
      c = (r("cc68"), r("2877")),
      l = Object(c["a"])(u, o, i, !1, null, "6d5d147e", null),
      p = l.exports,
      f = {
        name: "App",
        components: {
          Home: p
        }
      },
      m = f,
      d = (r("034f"), Object(c["a"])(m, n, s, !1, null, null, null)),
      y = d.exports,
      h = (r("d3b7"), r("bc3a")),
      g = r.n(h),
      P = function () {
        var e = "http://118.31.226.57:9876/tpms/";
        return e
      };
    console.log("自动获取的IP", P());
    var T = {
      "根据天数获取胎温胎压": "pastTpmsByDay",
      "根据时间获取胎温胎压": "pastHourTpms"
    };
    function v(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return new Promise((function (r, a) {
        g.a.get(e, {
          params: t
        }).then((function (e) {
          r(e.data)
        })).
          catch((function (e) {
            a(e)
          }))
      }))
    }
    function E(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return new Promise((function (r, a) {
        g.a.post(e, t).then((function (e) {
          r(e.data)
        }), (function (e) {
          a(e)
        }))
      }))
    }
    function C(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return new Promise((function (r, a) {
        g.a.patch(e, t).then((function (e) {
          r(e.data)
        }), (function (e) {
          a(e)
        }))
      }))
    }
    function I(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return new Promise((function (r, a) {
        g.a.put(e, t).then((function (e) {
          r(e.data)
        }), (function (e) {
          a(e)
        }))
      }))
    }
    g.a.defaults.timeout = 15e3,
      g.a.defaults.baseURL = P(),
      console.log("http请求基础地址", P()),
      g.a.interceptors.request.use((function (e) {
        return e.headers = {
          "Content-Type": "application/json;charset=UTF-8"
        },
          e
      }), (function (e) {
        return Promise.reject(e)
      })),
      g.a.interceptors.response.use((function (e) {
        switch (e.data.respCode) {
          case "401":
            console.log("未授权，请重新登录");
            break;
          case "404":
            console.log("请求错误,未找到该资源");
            break;
          case "500":
            console.log("服务器端出错");
            break;
          default:
            return e
        }
      }), (function (e) {
        if (e && e.response) switch (e.response.status) {
          case 400:
            console.log("错误请求");
            break;
          case 401:
            console.log("未授权，请重新登录");
            break;
          case 403:
            console.log("拒绝访问");
            break;
          case 404:
            console.log("请求错误,未找到该资源");
            break;
          case 405:
            console.log("请求方法未允许");
            break;
          case 408:
            console.log("请求超时");
            break;
          case 500:
            console.log("服务器端出错");
            break;
          case 501:
            console.log("网络未实现");
            break;
          case 502:
            console.log("网络错误");
            break;
          case 503:
            console.log("服务不可用");
            break;
          case 504:
            console.log("网络超时");
            break;
          case 505:
            console.log("http版本不支持该请求");
            break;
          default:
            console.log("连接错误".concat(e.response.status))
        } else console.log("连接到服务器失败".concat(e));
        return Promise.resolve(e.response)
      }));
    var O = {
      post: E,
      fetch: v,
      patch: C,
      put: I
    };
    r("5aea");
    a["a"].prototype.$http = O,
      a["a"].prototype.$serverAPI = T,
      a["a"].config.productionTip = !1,
      new a["a"]({
        render: function (e) {
          return e(y)
        }
      }).$mount("#app")
  },
  "5aea": function (e, t, r) { },
  6: function (e, t) { },
  7: function (e, t) { },
  8: function (e, t) { },
  "85ec": function (e, t, r) { },
  a105: function (e, t, r) {
    e.exports = r.p + "img/brand.b5b09a83.png"
  },
  b226: function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABECAMAAAD5hOYYAAAAQlBMVEVHcExSuv9Su/9Suv9Pu/9Suv9Suv9Suv9Ov/9SvP9Suv9Suv9Su/9SvP9Suv9Su/9Su/9Su/9Su/9Su/9SvP9Suv8jyOeJAAAAFXRSTlMAqPXpDVH83QUyzXluGLqOXZxChSJREto2AAAC1UlEQVRIx6VXWbalIAyUSWYElP1vtUH0GhSHd5pPNEkllYlh6B0qvdHaMCmGj0fOakzbwU7bDyJMpfaMTr5ZqSKjQtM8T45XObc8iIip4MKI0f3GerdemVsZW8zg+eTEEooYugnJUsAge4PZ0a6dLDOaG9hFqmOLZnU43iE3GSK6XodsJ97HyGRbFxgsX/onMjJCfIq8yA6FRwZFhu8u1gkIj2CIY8wRA87L7JY8GwKIGd9ziLPGa3fyiAgI/zjTweOYRsgiSmluZIiWlEpNGimXkgZCBMAtcUSbfzRrSz+EvsEns2ro3kGjyFJ8B25z1A8nPPiPtXGkBJjiMH4zcAm1wAcNFDqgoATTd7VV6ByEyMDg/TTglJoioNkRgEj/t9Df4U1Aw1MgoPKSrn8PeQQQWnKHE7njoY9m75f3NMpfFADepOJtwjZpveYRfy0Ne6rCgo+9FeHcolsv+Eu5L63iYpq0eDvHnQ2tVI2PI8X3+mJHUZOCBMZk96JAvh8opXp4ZwTkJMO3o7I0PdZrobzb43/ttf8tpr62ZxQ3uCtF5i8R2iMrnrjokMWeOeySRV/GUBf81NbypzAVivzrvDsRcp2AV7LO1JvrrH0ly+JTS/tCFmoawfCJrJJa8fl/G01s+N83hSX2M8/6sLYTCcnKrYPYSh9H/iQo6lpXhVaylp1rX4dA3TH94Z4wZNtYVYhwOflllVG4/kGMgCvo6PRvN97qFIZESF3BqPVGFjO8XYpDSbdLW7O6eE1kDRA24kpW6NSkMHjljVXZzibXrf5lnVe6X61lxnSraJ2aZWD0mNNKadHfdP0Kn8evT4rIa0XGQoFjH7JSMJf27Tiu1JLAHmuaslD/21DRaeNbBRMXcW3z0YTtoYOnQ7Od+fGKIcqhMJUHyhSQU+T3Lkr89KQQ8NXUO6Oau72PFhjkIppNZ9gF1n2whJXMl9ddft95z6S9/voPBXhC5Zg0p5gAAAAASUVORK5CYII="
  },
  cc68: function (e, t, r) {
    "use strict";
    r("5138")
  }
});
//# sourceMappingURL=app.2ea9ffcc.js.map
