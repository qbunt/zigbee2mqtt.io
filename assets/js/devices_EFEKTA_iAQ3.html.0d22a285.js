"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[86821],{70221:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>c,data:()=>d});var a=o(6254);const i={},c=(0,o(35459).A)(i,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[8]||(t[8]=(0,a.Lk)("h1",{id:"efekta-efekta-iaq3",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#efekta-efekta-iaq3"},[(0,a.Lk)("span",null,"EFEKTA EFEKTA_iAQ3")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"EFEKTA_iAQ3")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=EFEKTA"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("EFEKTA")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"CO2 Monitor with IPS TFT Display, outdoor temperature and humidity, date and time")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"co2, temperature, humidity, voc_index, voc_raw_data, illuminance_lux, illuminance, auto_brightness, night_onoff_backlight, night_on_backlight, night_off_backlight, rotate, long_chart_period, long_chart_period2, set_altitude, temperature_offset, humidity_offset, internal_or_external, automatic_scal, forced_recalibration, factory_reset_co2, manual_forced_recalibration, enable_gas, invert_logic_gas, high_gas, low_gas, linkquality")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/EFEKTA_iAQ3.png",alt:"EFEKTA EFEKTA_iAQ3"})])],-1))])]),t[9]||(t[9]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,a.Fv)('<ul><li><p><code>co2_calibration</code>: Calibrates the co2 value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>illuminance_lux_calibration</code>: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="co2-numeric" tabindex="-1"><a class="header-anchor" href="#co2-numeric"><span>CO2 (numeric)</span></a></h3><p>Measured value. Value can be found in the published state on the <code>co2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;co2&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>ppm</code>.</p><h3 id="temperature-numeric-1-endpoint" tabindex="-1"><a class="header-anchor" href="#temperature-numeric-1-endpoint"><span>Temperature (numeric, 1 endpoint)</span></a></h3><p>Measured value of the built-in temperature sensor. Value can be found in the published state on the <code>temperature_1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_1&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="temperature-numeric-2-endpoint" tabindex="-1"><a class="header-anchor" href="#temperature-numeric-2-endpoint"><span>Temperature (numeric, 2 endpoint)</span></a></h3><p>Measured value of the external temperature sensor. Value can be found in the published state on the <code>temperature_2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_2&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric-1-endpoint" tabindex="-1"><a class="header-anchor" href="#humidity-numeric-1-endpoint"><span>Humidity (numeric, 1 endpoint)</span></a></h3><p>Measured value of the built-in humidity sensor. Value can be found in the published state on the <code>humidity_1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;humidity_1&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="humidity-numeric-2-endpoint" tabindex="-1"><a class="header-anchor" href="#humidity-numeric-2-endpoint"><span>Humidity (numeric, 2 endpoint)</span></a></h3><p>Measured value of the external humidity sensor. Value can be found in the published state on the <code>humidity_2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;humidity_2&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="voc-index-numeric" tabindex="-1"><a class="header-anchor" href="#voc-index-numeric"><span>Voc index (numeric)</span></a></h3><p>VOC index. Value can be found in the published state on the <code>voc_index</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>VOC Index points</code>.</p><h3 id="voc-raw-data-numeric" tabindex="-1"><a class="header-anchor" href="#voc-raw-data-numeric"><span>Voc raw data (numeric)</span></a></h3><p>SRAW_VOC, digital raw value. Value can be found in the published state on the <code>voc_raw_data</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ticks</code>.</p><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric"><span>Illuminance lux (numeric)</span></a></h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="auto-brightness-binary" tabindex="-1"><a class="header-anchor" href="#auto-brightness-binary"><span>Auto brightness (binary)</span></a></h3><p>Enable or Disable Auto Brightness of the Display. Value can be found in the published state on the <code>auto_brightness</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;auto_brightness&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;auto_brightness&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> auto brightness is ON, if <code>OFF</code> OFF.</p><h3 id="night-onoff-backlight-binary" tabindex="-1"><a class="header-anchor" href="#night-onoff-backlight-binary"><span>Night onoff backlight (binary)</span></a></h3><p>Complete shutdown of the backlight at night mode. Value can be found in the published state on the <code>night_onoff_backlight</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;night_onoff_backlight&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;night_onoff_backlight&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> night onoff backlight is ON, if <code>OFF</code> OFF.</p><h3 id="night-on-backlight-numeric" tabindex="-1"><a class="header-anchor" href="#night-on-backlight-numeric"><span>Night on backlight (numeric)</span></a></h3><p>Night mode activation time. Value can be found in the published state on the <code>night_on_backlight</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;night_on_backlight&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;night_on_backlight&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>23</code>. The unit of this value is <code>Hr</code>.</p><h3 id="night-off-backlight-numeric" tabindex="-1"><a class="header-anchor" href="#night-off-backlight-numeric"><span>Night off backlight (numeric)</span></a></h3><p>Night mode deactivation time. Value can be found in the published state on the <code>night_off_backlight</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;night_off_backlight&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;night_off_backlight&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>23</code>. The unit of this value is <code>Hr</code>.</p><h3 id="rotate-enum" tabindex="-1"><a class="header-anchor" href="#rotate-enum"><span>Rotate (enum)</span></a></h3><p>Display rotation angle. Value can be found in the published state on the <code>rotate</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;rotate&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;rotate&quot;: NEW_VALUE}</code>. The possible values are: <code>0</code>, <code>90</code>, <code>180</code>, <code>270</code>.</p><h3 id="long-chart-period-binary" tabindex="-1"><a class="header-anchor" href="#long-chart-period-binary"><span>Long chart period (binary)</span></a></h3><p>The period of plotting the CO2 level(OFF - 1H | ON - 24H). Value can be found in the published state on the <code>long_chart_period</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;long_chart_period&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;long_chart_period&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> long chart period is ON, if <code>OFF</code> OFF.</p><h3 id="long-chart-period2-binary" tabindex="-1"><a class="header-anchor" href="#long-chart-period2-binary"><span>Long chart period2 (binary)</span></a></h3><p>The period of plotting the VOC Index points(OFF - 1H | ON - 24H). Value can be found in the published state on the <code>long_chart_period2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;long_chart_period2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;long_chart_period2&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> long chart period2 is ON, if <code>OFF</code> OFF.</p><h3 id="set-altitude-numeric" tabindex="-1"><a class="header-anchor" href="#set-altitude-numeric"><span>Set altitude (numeric)</span></a></h3><p>Setting the altitude above sea level (for high accuracy of the CO2 sensor). Value can be found in the published state on the <code>set_altitude</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;set_altitude&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;set_altitude&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>3000</code>. The unit of this value is <code>meters</code>.</p><h3 id="temperature-offset-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-offset-numeric"><span>Temperature offset (numeric)</span></a></h3><p>Adjust temperature. Value can be found in the published state on the <code>temperature_offset</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_offset&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_offset&quot;: NEW_VALUE}</code>. The minimal value is <code>-50</code> and the maximum value is <code>50</code>. The unit of this value is <code>°C</code>.</p><h3 id="humidity-offset-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-offset-numeric"><span>Humidity offset (numeric)</span></a></h3><p>Adjust humidity. Value can be found in the published state on the <code>humidity_offset</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;humidity_offset&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_offset&quot;: NEW_VALUE}</code>. The minimal value is <code>-50</code> and the maximum value is <code>50</code>. The unit of this value is <code>%</code>.</p><h3 id="internal-or-external-binary" tabindex="-1"><a class="header-anchor" href="#internal-or-external-binary"><span>Internal or external (binary)</span></a></h3><p>Display data from internal or external TH sensor. Value can be found in the published state on the <code>internal_or_external</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;internal_or_external&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;internal_or_external&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> internal or external is ON, if <code>OFF</code> OFF.</p><h3 id="automatic-scal-binary" tabindex="-1"><a class="header-anchor" href="#automatic-scal-binary"><span>Automatic scal (binary)</span></a></h3><p>Automatic self calibration. Value can be found in the published state on the <code>automatic_scal</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;automatic_scal&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;automatic_scal&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> automatic scal is ON, if <code>OFF</code> OFF.</p><h3 id="forced-recalibration-binary" tabindex="-1"><a class="header-anchor" href="#forced-recalibration-binary"><span>Forced recalibration (binary)</span></a></h3><p>Start FRC (Perform Forced Recalibration of the CO2 Sensor). Value can be found in the published state on the <code>forced_recalibration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;forced_recalibration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;forced_recalibration&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> forced recalibration is ON, if <code>OFF</code> OFF.</p><h3 id="factory-reset-co2-binary" tabindex="-1"><a class="header-anchor" href="#factory-reset-co2-binary"><span>Factory reset co2 (binary)</span></a></h3><p>Factory Reset CO2 sensor. Value can be found in the published state on the <code>factory_reset_co2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;factory_reset_co2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;factory_reset_co2&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> factory reset co2 is ON, if <code>OFF</code> OFF.</p><h3 id="manual-forced-recalibration-numeric" tabindex="-1"><a class="header-anchor" href="#manual-forced-recalibration-numeric"><span>Manual forced recalibration (numeric)</span></a></h3><p>Start Manual FRC (Perform Forced Recalibration of the CO2 Sensor). Value can be found in the published state on the <code>manual_forced_recalibration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;manual_forced_recalibration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;manual_forced_recalibration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>5000</code>. The unit of this value is <code>ppm</code>.</p><h3 id="enable-gas-binary" tabindex="-1"><a class="header-anchor" href="#enable-gas-binary"><span>Enable gas (binary)</span></a></h3><p>Enable CO2 Gas Control. Value can be found in the published state on the <code>enable_gas</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;enable_gas&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_gas&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable gas is ON, if <code>OFF</code> OFF.</p><h3 id="invert-logic-gas-binary" tabindex="-1"><a class="header-anchor" href="#invert-logic-gas-binary"><span>Invert logic gas (binary)</span></a></h3><p>Enable invert logic CO2 Gas Control. Value can be found in the published state on the <code>invert_logic_gas</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;invert_logic_gas&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;invert_logic_gas&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> invert logic gas is ON, if <code>OFF</code> OFF.</p><h3 id="high-gas-numeric" tabindex="-1"><a class="header-anchor" href="#high-gas-numeric"><span>High gas (numeric)</span></a></h3><p>Setting High CO2 Gas Border. Value can be found in the published state on the <code>high_gas</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;high_gas&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;high_gas&quot;: NEW_VALUE}</code>. The minimal value is <code>400</code> and the maximum value is <code>5000</code>. The unit of this value is <code>ppm</code>.</p><h3 id="low-gas-numeric" tabindex="-1"><a class="header-anchor" href="#low-gas-numeric"><span>Low gas (numeric)</span></a></h3><p>Setting Low CO2 Gas Border. Value can be found in the published state on the <code>low_gas</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;low_gas&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;low_gas&quot;: NEW_VALUE}</code>. The minimal value is <code>400</code> and the maximum value is <code>5000</code>. The unit of this value is <code>ppm</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',60))])}]]),d=JSON.parse('{"path":"/devices/EFEKTA_iAQ3.html","title":"EFEKTA EFEKTA_iAQ3 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"EFEKTA EFEKTA_iAQ3 control via MQTT","description":"Integrate your EFEKTA EFEKTA_iAQ3 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-03-31T18:43:56.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"CO2 (numeric)","slug":"co2-numeric","link":"#co2-numeric","children":[]},{"level":3,"title":"Temperature (numeric, 1 endpoint)","slug":"temperature-numeric-1-endpoint","link":"#temperature-numeric-1-endpoint","children":[]},{"level":3,"title":"Temperature (numeric, 2 endpoint)","slug":"temperature-numeric-2-endpoint","link":"#temperature-numeric-2-endpoint","children":[]},{"level":3,"title":"Humidity (numeric, 1 endpoint)","slug":"humidity-numeric-1-endpoint","link":"#humidity-numeric-1-endpoint","children":[]},{"level":3,"title":"Humidity (numeric, 2 endpoint)","slug":"humidity-numeric-2-endpoint","link":"#humidity-numeric-2-endpoint","children":[]},{"level":3,"title":"Voc index (numeric)","slug":"voc-index-numeric","link":"#voc-index-numeric","children":[]},{"level":3,"title":"Voc raw data (numeric)","slug":"voc-raw-data-numeric","link":"#voc-raw-data-numeric","children":[]},{"level":3,"title":"Illuminance lux (numeric)","slug":"illuminance-lux-numeric","link":"#illuminance-lux-numeric","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Auto brightness (binary)","slug":"auto-brightness-binary","link":"#auto-brightness-binary","children":[]},{"level":3,"title":"Night onoff backlight (binary)","slug":"night-onoff-backlight-binary","link":"#night-onoff-backlight-binary","children":[]},{"level":3,"title":"Night on backlight (numeric)","slug":"night-on-backlight-numeric","link":"#night-on-backlight-numeric","children":[]},{"level":3,"title":"Night off backlight (numeric)","slug":"night-off-backlight-numeric","link":"#night-off-backlight-numeric","children":[]},{"level":3,"title":"Rotate (enum)","slug":"rotate-enum","link":"#rotate-enum","children":[]},{"level":3,"title":"Long chart period (binary)","slug":"long-chart-period-binary","link":"#long-chart-period-binary","children":[]},{"level":3,"title":"Long chart period2 (binary)","slug":"long-chart-period2-binary","link":"#long-chart-period2-binary","children":[]},{"level":3,"title":"Set altitude (numeric)","slug":"set-altitude-numeric","link":"#set-altitude-numeric","children":[]},{"level":3,"title":"Temperature offset (numeric)","slug":"temperature-offset-numeric","link":"#temperature-offset-numeric","children":[]},{"level":3,"title":"Humidity offset (numeric)","slug":"humidity-offset-numeric","link":"#humidity-offset-numeric","children":[]},{"level":3,"title":"Internal or external (binary)","slug":"internal-or-external-binary","link":"#internal-or-external-binary","children":[]},{"level":3,"title":"Automatic scal (binary)","slug":"automatic-scal-binary","link":"#automatic-scal-binary","children":[]},{"level":3,"title":"Forced recalibration (binary)","slug":"forced-recalibration-binary","link":"#forced-recalibration-binary","children":[]},{"level":3,"title":"Factory reset co2 (binary)","slug":"factory-reset-co2-binary","link":"#factory-reset-co2-binary","children":[]},{"level":3,"title":"Manual forced recalibration (numeric)","slug":"manual-forced-recalibration-numeric","link":"#manual-forced-recalibration-numeric","children":[]},{"level":3,"title":"Enable gas (binary)","slug":"enable-gas-binary","link":"#enable-gas-binary","children":[]},{"level":3,"title":"Invert logic gas (binary)","slug":"invert-logic-gas-binary","link":"#invert-logic-gas-binary","children":[]},{"level":3,"title":"High gas (numeric)","slug":"high-gas-numeric","link":"#high-gas-numeric","children":[]},{"level":3,"title":"Low gas (numeric)","slug":"low-gas-numeric","link":"#low-gas-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1732221147000},"filePathRelative":"devices/EFEKTA_iAQ3.md"}')}}]);