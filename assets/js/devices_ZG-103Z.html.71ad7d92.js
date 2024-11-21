"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[64096],{39902:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>o,data:()=>s});var a=i(6254);const n={},o=(0,i(35459).A)(n,[["render",function(e,t){const i=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[7]||(t[7]=(0,a.Lk)("h1",{id:"tuya-zg-103z",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#tuya-zg-103z"},[(0,a.Lk)("span",null,"Tuya ZG-103Z")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"ZG-103Z")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(i,{to:"/supported-devices/#v=Tuya"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Tuya")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Vibration sensor")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"vibration, tilt, x, y, z, battery, sensitivity, linkquality")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZG-103Z.png",alt:"Tuya ZG-103Z"})])],-1))])]),t[8]||(t[8]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="battery" tabindex="-1"><a class="header-anchor" href="#battery"><span>Battery</span></a></h3><p>Uses a CR2450 battery</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Press the reset button for about 3 seconds. The LED lights flash.</p><p><em>NOTE: When you fail to pair a device, try replacing the battery, this could solve the problem.</em></p><h3 id="frequency-of-vibration-actions" tabindex="-1"><a class="header-anchor" href="#frequency-of-vibration-actions"><span>Frequency of <code>vibration</code> actions</span></a></h3><p>The subtopic <code>/action</code> with payload <code>vibration</code> and associated status JSON blobs are emitted about one second after onset, but not more frequently than 5 second regardless of whether vibrations are continuous or intermittent within that 5 second.</p><h3 id="troubleshooting-device-stops-sending-messages-disconnects-from-network" tabindex="-1"><a class="header-anchor" href="#troubleshooting-device-stops-sending-messages-disconnects-from-network"><span>Troubleshooting: device stops sending messages/disconnects from network</span></a></h3><p>Since devices do not fully comply to the Zigbee standard, it sometimes happens that they disconnect from the network. Most of the times this happens because of the following reasons:</p><ul><li>Device has a weak signal, you can see the signal quality in the published messages as <code>linkquality</code>. A linkquality &lt; 20 is considered weak.</li><li>Low battery voltage, this can even happen when the battery still appears full. Try a different battery.</li><li>The device is connected through a router which cannot deal with Xiaomi devices. This is known to happen devices from: Centralite, General Electric, Iris, Ledvance, Legrand, OSRAM, Sylvania, SmartThings, Securifi. A possible solution is to connect the device directly to the central coordinator by pushing the reset button while being physically close to it.</li></ul><p>More detailed information about this can be found <a href="https://community.hubitat.com/t/xiaomi-aqara-devices-pairing-keeping-them-connected/623" target="_blank" rel="noopener noreferrer">here</a>.</p><h3 id="sensitivity" tabindex="-1"><a class="header-anchor" href="#sensitivity"><span>Sensitivity</span></a></h3><p>The sensitivity can be changed by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code><code>{&quot;sensitivity&quot;: &quot;SENSITIVITY&quot;}</code> where <code>SENSITIVITY</code> is one of the following values: <code>low</code>, <code>medium</code>, <code>high</code>.</p><p>After setting the sensitivity you immediately have to start pressing the reset button with an interval of 1 second until you see Zigbee2MQTT publishing the new sensitivity to MQTT.</p><h3 id="calibration" tabindex="-1"><a class="header-anchor" href="#calibration"><span>Calibration</span></a></h3><p>In order to improve the factory calibration or lack thereof, you can get a better result with a 2 step offset calibration:</p><ul><li>Ensure the x, y and z offset are set to 0 in the device specific settings</li><li>Put the device on a level surface, face up. <ul><li>A few seconds after the tilt action, the angles and accelerometer values (<code>x_axis</code>, <code>y_axis</code>, <code>z_axis</code>) are updated</li><li><code>x_axis</code> and <code>y_axis</code> should be small, <code>z_axis</code> around 255</li><li>Set the offset for x and y to the opposite values of <code>x_axis</code> and <code>y_axis</code> to compensate.</li></ul></li><li>Put the device on a side <ul><li>After a few seconds, te values update, and <code>z_axis</code> should be small, as well as one of the <code>x_axis</code> or <code>y_axis</code>, the other being around ±1000</li><li>Set the offset for z to the opposite of <code>z_axis</code> You can fine tune the values of the offset by trying other sides and picking values that match best. Remember that the device sends accelerometer values a few seconds after the actual tilt event.</li></ul></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="vibration-binary" tabindex="-1"><a class="header-anchor" href="#vibration-binary"><span>Vibration (binary)</span></a></h3><p>Indicates whether the device detected vibration. Value can be found in the published state on the <code>vibration</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> vibration is ON, if <code>false</code> OFF.</p><h3 id="tilt-binary" tabindex="-1"><a class="header-anchor" href="#tilt-binary"><span>Tilt (binary)</span></a></h3><p>Indicates whether the device detected tilt. Value can be found in the published state on the <code>tilt</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tilt is ON, if <code>false</code> OFF.</p><h3 id="x-numeric" tabindex="-1"><a class="header-anchor" href="#x-numeric"><span>X (numeric)</span></a></h3><p>X coordinate. Value can be found in the published state on the <code>x</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>256</code>.</p><h3 id="y-numeric" tabindex="-1"><a class="header-anchor" href="#y-numeric"><span>Y (numeric)</span></a></h3><p>Y coordinate. Value can be found in the published state on the <code>y</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>256</code>.</p><h3 id="z-numeric" tabindex="-1"><a class="header-anchor" href="#z-numeric"><span>Z (numeric)</span></a></h3><p>Z coordinate. Value can be found in the published state on the <code>z</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>256</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="sensitivity-enum" tabindex="-1"><a class="header-anchor" href="#sensitivity-enum"><span>Sensitivity (enum)</span></a></h3><p>Vibration detection sensitivity. Value can be found in the published state on the <code>sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>middle</code>, <code>high</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',35))])}]]),s=JSON.parse('{"path":"/devices/ZG-103Z.html","title":"Tuya ZG-103Z control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya ZG-103Z control via MQTT","description":"Integrate your Tuya ZG-103Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-08-29T20:08:17.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Battery","slug":"battery","link":"#battery","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Frequency of vibration actions","slug":"frequency-of-vibration-actions","link":"#frequency-of-vibration-actions","children":[]},{"level":3,"title":"Troubleshooting: device stops sending messages/disconnects from network","slug":"troubleshooting-device-stops-sending-messages-disconnects-from-network","link":"#troubleshooting-device-stops-sending-messages-disconnects-from-network","children":[]},{"level":3,"title":"Sensitivity","slug":"sensitivity","link":"#sensitivity","children":[]},{"level":3,"title":"Calibration","slug":"calibration","link":"#calibration","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Vibration (binary)","slug":"vibration-binary","link":"#vibration-binary","children":[]},{"level":3,"title":"Tilt (binary)","slug":"tilt-binary","link":"#tilt-binary","children":[]},{"level":3,"title":"X (numeric)","slug":"x-numeric","link":"#x-numeric","children":[]},{"level":3,"title":"Y (numeric)","slug":"y-numeric","link":"#y-numeric","children":[]},{"level":3,"title":"Z (numeric)","slug":"z-numeric","link":"#z-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Sensitivity (enum)","slug":"sensitivity-enum","link":"#sensitivity-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1732221147000},"filePathRelative":"devices/ZG-103Z.md"}')}}]);