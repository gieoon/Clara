import numpy as np
import pyautogui
import imutils 
import cv2
import time


#take screenshots of current state with pyautogui
#convert the PIL/Pillow image to an OpenCV compatible numpy array
#write to disk
image = pyautogui.screenshot()
image = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)
ts = str(int((time.time())))
#print(ts)
cv2.imwrite("screenshots/" + ts + "_1.png", image)

pyautogui.screenshot("screenshots/" + ts + "_2" + '.png')

cvImage = cv2.imread("screenshots/" + ts + "_1.png")
resizedImage = imutils.resize(cvImage, width=600)
cv2.imshow("Screenshot", resizedImage)
cv2.waitKey(0)& 0xFF #wait for enter to continue

#save to disk
#manually tag the saved images
#view the images and identify certain locations which are categorized.
#give AI a huge amount of curiosity. (imitating people you know)
#set up reward mechanism for result.

#use puppeteer to scrape different websites.

exit()