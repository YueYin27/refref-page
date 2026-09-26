# RefRef Website

This repository contains the website for the RefRef project.

**Note:** This website is based on the [Nerfies website](https://github.com/nerfies/nerfies.github.io). Special thanks to the Nerfies authors for making their website open source.

**Project Website:** [https://github.com/YueYin27/refref](https://github.com/YueYin27/refref)

## Introduction
RefRef is a dataset and benchmark for reconstructing scenes with refractive and reflective objects from posed images. It contains 150 synthetic scenes (50 objects, each rendered against three background types) and 60 real scenes (15 object configurations captured in two indoor and two outdoor environments). For benchmarking, we provide an oracle method that traces accurate light paths given the object geometry and refractive indices, and R3F, a simple two-stage baseline that relaxes these requirements. Our evaluation of state-of-the-art methods shows that the task is far from solved.

## Dataset
The dataset is available on Hugging Face:
[https://huggingface.co/datasets/yinyue27/RefRef](https://huggingface.co/datasets/yinyue27/RefRef)

## Citation
If you find RefRef useful for your work, please cite:

```bibtex
@misc{yin2025refref,
  title         = {RefRef: A Dataset and Benchmark for Reconstructing Refractive and Reflective Objects},
  author        = {Yin, Yue and Tao, Enze and Deng, Weijian and Campbell, Dylan},
  year          = {2025},
  eprint        = {2505.05848},
  archivePrefix = {arXiv},
  primaryClass  = {cs.CV},
  url           = {https://arxiv.org/abs/2505.05848}
}
```

## License
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
