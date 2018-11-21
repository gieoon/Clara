install 
LabelImg (Windows + Anaconda)

using Greenshot // really good program for fast and ez screenshots.
http://getgreenshot.org/

build a tool for snipping fast? One hotkey to snip a location and save to directory under current timestamp

venv for local usage of packages
virtualenv --system-site-packages -p python3 ./venv
Activate the virtual environment:

.\venv\Scripts\activate
Install packages within a virtual environment without affecting the host system setup. Start by upgrading pip:

pip install --upgrade pip

pip list  # show packages installed within the virtual environment
And to exit virtualenv later:

deactivate  # don't exit until you're done using TensorFlow


can run tensorflow without installing it, straight through a docker container, or through CoLab to also use their GPU.