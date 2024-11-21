"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[57543],{59344:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>a,data:()=>l});var o=i(6254);const n={},a=(0,i(35459).A)(n,[["render",function(e,t){const i=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[7]||(t[7]=(0,o.Lk)("h1",{id:"smarthjemmet-dk-multi-zig-sw",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#smarthjemmet-dk-multi-zig-sw"},[(0,o.Lk)("span",null,"smarthjemmet.dk MULTI-ZIG-SW")])],-1)),(0,o.Lk)("table",null,[t[6]||(t[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"MULTI-ZIG-SW")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(i,{to:"/supported-devices/#v=smarthjemmet.dk"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("smarthjemmet.dk")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Multi switch from Smarthjemmet.dk")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"switch_type_1, switch_type_2, switch_type_3, switch_type_4, battery, action, voltage, linkquality")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/MULTI-ZIG-SW.png",alt:"smarthjemmet.dk MULTI-ZIG-SW"})])],-1))])]),t[8]||(t[8]=(0,o.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><p><a href="https://smarthjemmet.dk" target="_blank" rel="noopener noreferrer">Multi switch from Smarthjemmet.dk</a></p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>If the device did not automatically start in pairing mode (LED blinking), you can start it manually by powering on and off the device four times, keeping it on the 4th time.</p><ul><li>Plug in battery and wait one second</li><li>Pull out battery</li><li>Plug in battery and wait one second</li><li>Pull out battery</li><li>Plug in battery and wait one second</li><li>Pull out battery</li><li>Plug in battery</li></ul><p>The LED should now be blinking with 5-10 second interval.</p><p>Video guide: <a href="https://www.youtube.com/watch?v=LkbnLPhi5Ts" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=LkbnLPhi5Ts</a></p><h3 id="switch-type" tabindex="-1"><a class="header-anchor" href="#switch-type"><span>Switch type</span></a></h3><p>MULTI-ZIG-SW has two modes for the four inputs: Switch and multi-click.</p><p>Switch turns the input into an on/off switch like a lamp switch. Multi-click allows the input to click multiple times. These are the different clicks:</p><ul><li>Single (button_X_single)</li><li>Double (button_X_double)</li><li>Triple (button_X_triple)</li><li>Hold (button_X_hold)</li><li>Release (button_X_release)</li></ul><p>Since the device is battery powered, it will not switch mode until it&#39;s awake. Make sure to keep the device online when changing mode, by enabling the input with a click.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch-type-1-enum-button-1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-1-enum-button-1-endpoint"><span>Switch type 1 (enum, button_1 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>switch_type_1_button_1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_1_button_1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_1_button_1&quot;: NEW_VALUE}</code>. The possible values are: <code>switch</code>, <code>multi-click</code>.</p><h3 id="switch-type-2-enum-button-2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-2-enum-button-2-endpoint"><span>Switch type 2 (enum, button_2 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>switch_type_2_button_2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_2_button_2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_2_button_2&quot;: NEW_VALUE}</code>. The possible values are: <code>switch</code>, <code>multi-click</code>.</p><h3 id="switch-type-3-enum-button-3-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-3-enum-button-3-endpoint"><span>Switch type 3 (enum, button_3 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>switch_type_3_button_3</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_3_button_3&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_3_button_3&quot;: NEW_VALUE}</code>. The possible values are: <code>switch</code>, <code>multi-click</code>.</p><h3 id="switch-type-4-enum-button-4-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-4-enum-button-4-endpoint"><span>Switch type 4 (enum, button_4 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>switch_type_4_button_4</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_4_button_4&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_4_button_4&quot;: NEW_VALUE}</code>. The possible values are: <code>switch</code>, <code>multi-click</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>single</code>, <code>double</code>, <code>triple</code>, <code>hold</code>, <code>release</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',29))])}]]),l=JSON.parse('{"path":"/devices/MULTI-ZIG-SW.html","title":"smarthjemmet.dk MULTI-ZIG-SW control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"smarthjemmet.dk MULTI-ZIG-SW control via MQTT","description":"Integrate your smarthjemmet.dk MULTI-ZIG-SW via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-06-27T19:44:08.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Switch type","slug":"switch-type","link":"#switch-type","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch type 1 (enum, button_1 endpoint)","slug":"switch-type-1-enum-button-1-endpoint","link":"#switch-type-1-enum-button-1-endpoint","children":[]},{"level":3,"title":"Switch type 2 (enum, button_2 endpoint)","slug":"switch-type-2-enum-button-2-endpoint","link":"#switch-type-2-enum-button-2-endpoint","children":[]},{"level":3,"title":"Switch type 3 (enum, button_3 endpoint)","slug":"switch-type-3-enum-button-3-endpoint","link":"#switch-type-3-enum-button-3-endpoint","children":[]},{"level":3,"title":"Switch type 4 (enum, button_4 endpoint)","slug":"switch-type-4-enum-button-4-endpoint","link":"#switch-type-4-enum-button-4-endpoint","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1732221147000},"filePathRelative":"devices/MULTI-ZIG-SW.md"}')}}]);