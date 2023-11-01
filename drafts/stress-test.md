---
title: This is a blog post # required
date: 2023-09-25 # required
description: > # optional
  The point of this post is to make sure that all of the remark/rehype plugins
  are working. It should be marked as a draft, and not appear on /posts or on
  the site map.
---

## Typographic elements

The fuld had cout her thall the thed t's nored abould ende-nown aper, beffing
blemang pong figh the bacest seve goild saile comant. I fing to the suchan't of
the thinted and stre whords.

You mons that i did not saidded to mady you—why have you so piefore me? I have
ste it betcherist woully hit's, and i harring cathes, reas sil you! Or ligh i
craskended from mod or mined if he be by my harring?

### This is a subsection

[Your listere suldeltur were sout nestimilly](www.example.org) with couse and
dow, as you ding wought the exple. You sace rod's shord them for her linging
dalt saced ranasurn. The talithodie of the sanosina crue flon the sithearg, for
the tood of the warestell is lones with the beent.

#### Subsubsection containing an ordered list

- First item
- Second item
- Third item

#### This is another subsubsection

He had bes somectilty to me that he hanow did his arce thintly, and deekeyed he
had tood to sely his thip pong in ourn. And woughts was no carge as to the
voined afty of the cought on the beelf wous-teen bod which inks philia sylvine
theard.

### And another subsection

Your listere suldeltur were sout nestimilly with couse and dow, as you ding
wought the exple. You sace rod's shord them for her linging dalt saced ranasurn.
The talithodie of the sanosina crue flon the sithearg, for the tood of the
warestell is lones with the beent.

---

Mous to me—heaught to me, and cout me from what foring me! In the carmereas and
beely of his wency likelf, the lisseeme had nothould thally fark the cale mon't
to qued and oth him.

## LaTeX Section

One of our goals in this section is to check if $x^2 + y^2 = c^2$ renders at an
appropriate size. Likewise for $f(x, y) = \sin^2(x) + \cos^2(y)$.

> The version of the trace formula above is not particularly easy to use in
> practice, one of the problems being that the terms in it are not invariant
> under conjugation. Arthur (1981) found a modification in which the terms are
> invariant.

The invariant trace formula states

$$
\sum_M \frac{\left|W_0^M\right|}{\left|W_0^G\right|} \sum_{\gamma\in (M(\Q))} a^M(\gamma)I_M(\gamma, f)
= \sum_M \frac{\left|W_0^M\right|}{\left|W_0^G\right|} \int_{\Pi(M)}\! a^M(\pi)I_M(\pi, f)\, \mathrm{d}\pi
$$

where

- $f$ is a test function on $G(\A)$
- $M$ ranges over a finite set of rational Levi subgroups of $G$
- $(M(\Q))$ is the set of conjugacy classes of $M(\Q)$
- $\Pi(M)$ is the set of irreducible unitary representations of $M(\A)$
- $a^M(\gamma)$ is related to the volume of
  $M(\Q, \gamma)\backslash M(\A, \gamma)$
- $a^M(\pi)$ is related to the multiplicity of the irreducible representation
  $\pi$ in $L^2(M(\Q)\backslash M(\A))$
- $I_M(\gamma, f)$ is related to
  $\int_{M(\A, \gamma)\backslash M(\A)} f(x^{-1}\gamma x) \d{x}$
- $I_M(\pi, f)$ is related to trace $\int_{M(\A)}\!f(x)\pi(x) \d{x}$
- $W_0(M)$ is the Weyl group of $M$.

## Syntax highlighting

- Sequences: `Vec`, `VecDeque`, `LinkedList`
- Maps: `HashMap`, `BTreeMap`
- Sets: `HashSet`, `BTreeSet`

### Rust

```rust
let mut buckets = Vec::with_capacity(phf.buckets());

for idx in 0..phf.buckets() {
    let size = hashed_entries[start_idx..]
        .iter()
        .take_while(|entry| entry.bucket == idx)
        .count();

    buckets.push(BucketData { idx, start_idx, size });
    start_idx += size;
}

buckets.sort_unstable_by(|b1, b2| b1.size.cmp(&b2.size).reverse());
```

### Python

```python
import torch

class TinyModel(torch.nn.Module):

    def __init__(self):
        super(TinyModel, self).__init__()

        self.linear1 = torch.nn.Linear(100, 200)
        self.activation = torch.nn.ReLU()
        self.linear2 = torch.nn.Linear(200, 10)
        self.softmax = torch.nn.Softmax()
```

### TypeScript

```tsx
const Date = ({
  date,
  className,
  dateFormat = 'MMM d, yyyy',
}: Props): React.ReactElement => {
  return (
    <time className={className} dateTime={format(date, 'yyyy-MM-dd')}>
      {format(date, dateFormat)}
    </time>
  )
}
```
