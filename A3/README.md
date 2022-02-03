For assignment three I attempted to use Reaction Diffusion to create an evolving composition. The composition has
three controllable sections; the clouds, trees, and roots.
The clouds were created by seeding the sky portion using a cutoff of Math.random() < 0.005 and using the RD values; A = 1.0, B = 0.46, Feed = 0.0545, Kill = 0.0545.
The central tree is seeded with a square measuring 40x40 and using RD values; A = 1.0, B = 0.4, Feed = 0.0545, Kill =0.062.
The roots were created by seeding a line through the center of the  canvas. The flow of the roots is achieved by using RD values; A =1.25, B = 0.1, Feed: 0.0367, Kill: 0.0649

The parts of the composition will eventually bleed into each other, I'm not really a fan of this and would like to fix this. 
The colors kinda suck, I may start over using black and white. I thought I had a bug in my program, but it turned out that the coefficients are so sensitive 
After not seeing any reaction with the given RD values; A=1.0, B=.5, Feed=.055, Kill=.062  dropping B below 0.55 fixed the issue.


Options:  
Style Map - the three sections of my composition have different feed and kill rates.  
Flow - the root section flows downward.

I'll show my wife soon...
