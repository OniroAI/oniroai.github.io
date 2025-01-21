---
title: Semantic Segmentation of Seismic Reflection
thumbnail: seismic/seismic.png
github: lRomul/argus-tgs-salt
short_description:
    Deep learning based semantic segmentation of reflection seismology images for salt deposits recognition.
---
__The project code is available on [Github](https://github.com/lRomul/argus-tgs-salt).__

![Title image](/assets/images/seismic/seismic_mosaic.png){: .center-image }
_Example of a whole seismic mosaic post-processing with salt domes. Green/blue - salt/empty regions from the train dataset; red - predicted mask; yellow - inpainted by the post-processing._

The project is based on the [Kaggle TGS Salt Identification Challenge](https://www.kaggle.com/c/tgs-salt-identification-challenge) competition, with the goal of building an algorithm that automatically and accurately identifies if a subsurface target is a salt deposit or not in seismic images. The task is crucial for oil and gas company drillers. The object of the competition is seismic data collected using reflection seismology. In a nutshell, the problem can be formulated as a semantic segmentation computer vision task.

A detailed description of our solution is available [here](https://nikolasent.github.io/deeplearning/competitions/segmentation/2018/10/24/Semantic-Segmentation-of-Seismic-Reflection-Images.html).
