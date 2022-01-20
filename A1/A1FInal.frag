// Jacob Pelrah (jpelrah@wpi.edu)
// Audio: Parliment - Flashlight


// Move mouse right to change visuals. 


vec3 neonBar(vec2 st, float pct, vec3 color, vec3 glow, float gain)
{
        return  smoothstep(gain * pct + .0001, gain * pct, st.y) * color -
                smoothstep(gain * pct, .0, st.y) * glow / vec3( abs(sin(time * 2.0)),
                abs(sin(time * 2.0)), abs(sin(time * 2.0)));
 } 
    
vec3 hNeonWave(vec2 st, vec3 color, vec3 glow, float freq, float phase){
    return smoothstep(0.05, 0.0, abs(abs(cos(st.x * freq  + time + phase)) - st.y - 0.2)) * color / 4.0 +
           smoothstep(0.01, 0.0, abs(abs(cos(st.x  * freq + time + phase)) - st.y - 0.2)) * glow;
} 


void main () {
    
vec2 st = gl_FragCoord.xy /resolution;

vec2 p = uv();
vec2 q = uv();
vec2 r = uv();
vec2 s = uv();


// Frequency bands
float bass = bands.x;
float midLow = bands.y;
float midHigh = bands.z;
float high = bands.w;    
    
float counter = mouse.x/ 100.0;
float rotation = 0.0;


p.y += cos(bass / p.x / q.y  * counter);   
q.y += cos(high / q.x / p.y);
r.y += cos(midLow / r.x / p.y - q.y );
s.y += cos(bass/ s.x);

float barLength = resolution.x / 4.0;
float gain = 1.0;
vec3 b1, b2, b3, b4;
if(gl_FragCoord.x < barLength)
{
     b1 = neonBar(st, midLow, vec3(1.0,.5 ,.3), vec3(1.0, 0.0, 1.0), gain);
    }
    else if(gl_FragCoord.x < 2. * barLength)
    {
       b2 = neonBar(st, bass, vec3(1.0,.2,0.3), vec3(1.0, 1.0, 0.0), gain);
    }
    else if(gl_FragCoord.x < 3. * barLength)
    {
        b3 = neonBar(st, midHigh, vec3(0.3,1.0,0.0), vec3(0.8, 0.4, 0), gain);
    }
    else if(gl_FragCoord.x < 4. * barLength)
    {
        b4 = neonBar(st, high, vec3(.3, 0., .9), vec3(0.4, 0.0, 0.6), gain);
    }    
    
    vec3 sWaveYellow = hNeonWave(st, vec3(1.0, 0.9, 0.5), vec3(1.0, 0.9, 0.5), 1.0, 0.0);
    vec3 sWaveBlue = hNeonWave(st, vec3(0.3, 0.3, 1.0), vec3(0.3, 0.3, 1.0), 1.0, 1.2);

    vec3 vBarGreen = hNeonWave (st, vec3(0.4, 1.0, 0.0), vec3(0.4, 1.0, 0.0), 0.0, 1.2);
    vec3 vBarPink = hNeonWave (st, vec3(1.0, .07, 0.57), vec3(1.0, 0.07, 0.57), 0.0, 2.0);
    vec3 vBarPurple = hNeonWave (st, vec3(0.5, 0.1, 0.8), vec3(0.5, 0.1, 0.8), 0.0, 3.2);
    
    vec4 a = vec4(b1, 1.0) + vec4(b2, 1.0) + vec4(b3, 1.0)+ vec4(b4, 1.0);
    vec4 bars =  vec4(vBarPink, 1.0) + vec4(vBarGreen, 1.0) + vec4(vBarPurple, 1.0);
    vec4  waves = vec4(sWaveYellow, 1.0) + vec4(sWaveBlue, 1.0);
   
   
    float threshold = mouse.x / 100.0;
    vec4 barsAndWaves = mix(bars + waves, a, mouse.x /1000.0);
   
   if(threshold < 10.0){
       
    gl_FragColor = barsAndWaves;
   }
   else if(threshold > 10.0) {
        vec2 rot = rotate(p, gl_FragCoord.xy/resolution.xy, time);
        vec4 unknown = vec4(rot.y, p.y * bass, r.y, 1.0);
        vec4 barsAndWavesToTheUnknown = mix(barsAndWaves, unknown, mouse.x);
        gl_FragColor = unknown;
   }
    
    

}