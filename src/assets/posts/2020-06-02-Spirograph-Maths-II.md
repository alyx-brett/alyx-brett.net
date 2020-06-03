> Note: I have significantly revised [my first post on this topic](/blog/2020-05-29-Spirograph-Maths-I) since first publishing it.

$\DeclareMathOperator{\lcm}{lcm}$The previous post concerned the number of rotations each part of a spirograph system completes in while drawing a single curve. Here, I'll  reason about the symmetries of such systems.

I'm restricting my discussion to systems made up entirely of circular components.

## 1 Simple Systems

Recall that in a 2-component system with a static part $\mathbf{A}$ and a moving part $\mathbf{B}$, the number of rotations of $\mathbf{B}$ 
is:

$$ r(A,B) = \frac{A}{\gcd(A,B)} = \frac{\lcm(A,B)}{B} $$

Note that $r(A,B) = \frac{B}{A}r(B,A)$
Each curve will have rotational symmetry order $r(A,B)$, and reflectional symmetry in $r(A,B)$ axes.

<div class="centred">
<ul class="captioned two">
<h3>Symmetries produced by a simple system</h3><li>
<img src="/assets/img/blog/spiro-maths-2/1a.jpg"/>
</li><li>
<img src="/assets/img/blog/spiro-maths-2/1b.jpg"/>
</li><li>
<img src="/assets/img/blog/spiro-maths-2/1c.jpg"/>
</li><li>
<img src="/assets/img/blog/spiro-maths-2/1d.jpg"/>
</li><p>
When there are an even number of points, the axes of symmetry pass through 0 points or 2 points each. When odd, each axis passes through just one point.
</p></ul>
</div>

## 2 Symmetries of symmetrical compound systems

As in the last post, we consider a 3 part compound system with 4 edges: $\mathbf{A}$, $\mathbf{B}$, $\mathbf{C}$, $\mathbf{D}$.

The number of total rotations of $\mathbf{D}$ is

$$\rho_I = \frac{\lcm(AC,BC,BD)}{BD}$$

And the total number of rotations of $\mathbf{B}$ and $\mathbf{C}$ is 

$$\rho_O = \frac{\lcm(AC,BC,BD)}{CB}$$

First consider a symmetrical system, i.e. where the middle piece is a ring having inner and outer curves parallel. The resulting curve will have rotational symmetry order $\rho_I$ and reflectional symmetry in $\rho_I$ axes in the same way as a simple system.

These systems are useful for introducing patterns which don't lie on whole tooth divisions of the outmost part.

For the remainder of the post we will consider asymmetrical systems where $\mathbf{B}$ and $\mathbf{C}$ are not parallel, i.e. wheels with off-centre cut-outs.

## 3 Rotational Symmetry of compound systems

As $\mathbf{B}$ completes $n$ rotations inside $\mathbf{A}$, $\mathbf{D}$ traverses $n$ full revolutions in $\mathbf{C}$, leaving it offset by $nC \pmod{D}$ teeth. Consider

$$V = \\{nC \mid n \in \mathbb{Z}/{D}\\} = \left\langle \gcd(C,D) \right\rangle $$

$$|V| = \frac{D}{\gcd(C,D)} = r(D,C)$$

Each member of $V$ corresponds to a distinct offset that $\mathbf{D}$ can have when $\mathbf{C}$ has rotated a whole number of times. These offsets will be evenly distributed, thus the number of times each offset will occur in one complete curve is

$$\frac{\rho_O}{|V|} = \frac{\rho_O}{r(D,C)}$$

This gives the order of rotational symmetry of the curve.

<div class="centred">
<ul class="captioned two">
<h3>Compound curves coloured according to offset-equivalency</h3><li>
<img src="/assets/img/blog/spiro-maths-2/2a.jpg"/>
Here there are 2 offset-classes, $[0]$ and $[7]$. You can see that offset-classes are a feature of 'points' of the outer system $\mathbf{AB}$ rather than a classification of rotations of $\mathbf{D}$.
</li><li>
<img src="/assets/img/blog/spiro-maths-2/2b.jpg"/>
Here there are 4 offset classes. Two of them are symmetrical to each other, but correspond to $[-6] (= [18])$ and $[+6]$.
</li><li>
<img src="/assets/img/blog/spiro-maths-2/2c.jpg"/>
</li></ul>
</div>

#### 3.1 Rotation induced by offset in an asymmetrical system

Since $n$ rotations of $\mathbf{B}$ leave $\mathbf{D}$ offset by $nC \pmod{D}$ teeth, it follows that *starting* with an offset of $nC \pmod{D}$ teeth is equivalent to rotating the figure around by $n$ rotations of $\mathbf{b}$. The minimum such rotation-inducing change is $\min V = \gcd(C,D)$.

We saw in the last post that the gap between subsequent points of a simple figure is $\gcd(A,B)$. So, offsetting the start position by $gcd(C,D)$ teeth rotates the figure by $gcd(A,B)$ teeth (a rotation through $\frac{2\pi}{r(A,B)}$).


<div class="centred">
<ul class="captioned two">
<h3>Offset-induced rotation</h3><li>
<img src="/assets/img/blog/spiro-maths-2/3a.jpg"/>
</li><li>
<img src="/assets/img/blog/spiro-maths-2/3b.jpg"/>
</li><li>
<img src="/assets/img/blog/spiro-maths-2/3c.jpg"/>
</li><li>
<img src="/assets/img/blog/spiro-maths-2/3d.jpg"/>
</li><p>Offsetting the inner cog by $gcd(56,35)=7$ teeth induces a rotation by $r(180,126)=18$ teeth on the outer ring.</p></ul>
</div>

## 4 Reflectional Symmetries of Compound Systems

#### 4.1 Aligned systems

A system is 'aligned' if at its starting point it has reflectional symmetry. This will happen when the pen is at the touching point of $\mathbf{C}$ and $\mathbf{D}$, or if $D$ is even, when it is on the opposite side of $\mathbf{D}$.

If a system starts aligned, the figure will have reflectional symmetry with the same access as the sarting configuration.

#### 4.2 Reflections across the alignment position

We will notate the curve produced by initially offsetting $\mathbf{D}$ by $n$ teeth as $\kappa_n$

$\kappa_n$ is a reflection throught the 'alignment' axis of $\kappa_{-n}$.

<div class="centred">
<ul class="captioned three">
<h3>Reflection across the alignment position</h3><li>
<img src="/assets/img/blog/spiro-maths-2/4a.jpg"/>
Starting with an offset produces a curve with rotational but not reflectional symmetry.
</li><li>
<img src="/assets/img/blog/spiro-maths-2/4b.jpg"/>
Reflecting the offset reflects the curve...
</li><li>
<img src="/assets/img/blog/spiro-maths-2/4c.jpg"/>
... resulting in a figure that has reflectional and rotational symmetry.
</li></ul>
</div>

Suppose $\gcd(C,D)$ is even. Then following (3.1), $\kappa_{\frac{1}{2}gcd(C,D)}$ is a rotation of $\kappa_{-\frac{1}{2}gcd(C,D)}$ but also it is a reflection; therefore $\kappa_{\frac{1}{2}gcd(C,D)}$ also has reflective symmetry.


<div class="centred">
<ul class="captioned two">
<h3>$\kappa_{\frac{1}{2}gcd(C,D)}$ has reflective symmetry</h3><li>
<img src="/assets/img/blog/spiro-maths-2/5a.jpg"/>
</li><li>
<img src="/assets/img/blog/spiro-maths-2/5b.jpg"/>
</li></ul>
</div>

## Summary

These results provide useful design input for more complex spirograph designs; in particular the ability ability to identify 'butterflies' with as few symmetries as possible, and also understanding how many iterations of '>1<1' will induce a new axis of symmetry.

The ideas aren't as rigorously proved as I might like but the findings do correspond with my results from actually spirographing.

Further areas to explore include generalising to systems with more than 3 parts, looking at non-circular parts, and continuing the ongoing discussion about notating spirograph recipes. Realistically I'm probably spirograph-mathsed-out for a little while though!