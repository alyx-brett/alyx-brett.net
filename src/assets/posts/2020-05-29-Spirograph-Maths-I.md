In this post, I'll derive expressions about rotations in spirograph systems. The first section runs through some simple number theory; you might choose to [skip to the good stuff](#2-simple-patterns).

This builds on [Aaron's Post](https://www.wildgears.com/math-and-predictions.html), which is more accessible.

## 1. Lowest Common Multiple and Greatest Common Divisor

#### 1.1 Natural Numbers

The natural numbers, written $\mathbb{N}$, are the numbers $1, 2, 3 \ldots$

#### 1.2 Divisors

A natural number $A$ is *divides* or *is a divisor of* another natural number $B$ if there exists some natural number $n$ such that $nA$ = $B$.

We notate $A$ is a divisor of $B$ by $A|B$.

#### 1.3 Greatest Common Divisor

The *greatest common divisor* of $A$ and $B$ is

$$gcd(A,B) = max \\{n \in \mathbb{N} \mid n|A\ \text{and}\ n|B \\} $$

If $X = \prod{p_{i}^{x_i}}$ is the prime factorisation of $X$, then

$$gcd(A,B) =  \prod{p_{i}^{min(a_i, b_i)}}$$

#### 1.4 Lowest Common Multiple

The *lowest (or least) common multiple* of $A$ and $B$ is:

$$lcm(A,B) = min \\{n \in \mathbb{N} \mid A|n\ \text{and}\ B|n \\} $$

If $X = \prod{p_{i}^{x_i}}$ is the prime factorisation of $X$, then

$$gcd(A,B) =  \prod{p_{i}^{max(a_i, b_i)}}$$

#### 1.5 Relationship between GCD and LCM

The following result makes manipulating LCM and GCD much easier:

$$gcd(A,B)lcm(A,B)$$
$$ = \prod{p_{i}^{min(a_i, b_i)}}\prod{p_{i}^{max(a_i, b_i)}} $$
$$ = \prod{p_{i}^{min(a_i, b_i)max(a_i, b_i)}} $$
$$ = \prod{p_{i}^{a_i b_i}} $$
$$ = A B $$

Therefore:

$$gcd(A,B) = \frac{AB}{lcm(A,B)}$$

## 2. Simple Patterns

Suppose a part $\mathbf{A}$ with $A$ teeth rotates against a part $\mathbf{B}$ with $B$ teeth, for example a wheel inside a ring. Each time A rotates one full turn relative to B, it moves around $A$ teeth inside B, and the pattern it leaves will repeat once it returns to its starting point, i.e. when a whole number of rotations if $A$ corresponds with a whole number of traversals of $B$. As a simple example, if an 80 wheel rotates inside a 120 ring, then after 3 rotations of the wheel it would have travelled 240 teeth, which is 2 whole traversals.

So:

Let $n, m \in \mathbb{N} $ such that $nA = mB$. 

Then $m\frac{B}{A} \in \mathbb{N}$, so $A|mB$.

But $B|mB$, so $lcm(A,B)|mB$.

Thus the minimum $n, m$ satisfying $nA=mB$ are
$$m = \frac{lcm(A,B)}{B}$$
$$n = \frac{lcm(A,B)}{A} = \frac{B}{gcd(A,B)}$$

#### 2.1 The number of points in a simple pattern

In spirograph terms, the number of rotations of $\mathbf{A}$ for it to first return to the starting point is $B\over gcd(A,B)$. This corresponds to the number of points.

#### 2.2 The spacing between points in a simple pattern

The gap between the points is $B \over \text{number of points}$, i.e. just $gcd(A,B)$.

## 3. Compound Patterns

In a compound pattern, a wheel $\mathbf{A}$ rotates inside a hole $\mathbf{B}$ cut from a wheel $\mathbf{C}$, which in turn rotates against a static $\mathbf{D}$, with teeth $A$, $B$, $C$, $D$ respectively.

Now we know from *(2.1)* that $\mathbf{C}$ will complete $D\over gcd(C,D)$ rotations inside $\mathbf{D}$, in which time $\mathbf{B}$ must also rotate the same number of times, since it is on the same piece. Thus, $\mathbf{A}$ must traverse a whole multiple of $B \frac{D}{gcd(C,D)}$ teeth to return to the starting point.

Therefore let $n, m \in \mathbb{N} $ such that $$nA = mB\frac{D}{gcd(C,D)}$$.

Following the same logic as in Section 2, we can write down
$$m = \frac{lcm(A,B\frac{D}{gcd(C,D)})}{B\frac{D}{gcd(C,D)}}$$
$$n = \frac{lcm(A,B\frac{D}{gcd(C,D)})}{A}$$

#### 3.1 The number of rotations of the smallest part in a 3-part system

The smallest part $A$ will rotate 
$$\frac{lcm(A,B\frac{D}{gcd(C,D)})}{A}$$

This will be the number of 'points' that the design has - although given the complexity of the movements involved, this may not be very visually apparent.

#### 3.2 The number of rotations of the middle part in a 3-part system

The middle component (outer edge $C$, inner edge $B$) must rotate $m \frac{D}{gcd(C,D)}$ times, which is to say that the number of rotations is:
$$\frac{lcm(A,B\frac{D}{gcd(C,D)})}{B}$$

## 4. Wrapping up

I found these results handy for working out which combinations of wheels and rings to use in my spirographing; the next things I'm planning to do are write about symmetries of spirographs and maybe at some point share a spreadsheet automating these calculations.