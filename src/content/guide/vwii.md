---
title: Wii U Installation
icon: fa-solid fa-download
pubDate: 2024-07-25
description: Get up-to-date instructions on how to install all of our services!
heroImage: "../../img/guidebg-3.webp"
---

<div style="display: flex; gap:8px; align-items: center;">
  <h5 style="font-family: system-ui; font-size:20px;">Requirements</h5>
  <hr style="flex-grow: 1; border: none; opacity:0.1; border-top: 2px solid var(--color); margin-left: 10px">
</div>
<div style="display:flex; gap:13px; margin-top:10px;background-color:var(--bg-color-tertiary); border:2px solid var(--border-color); align-items:center; justify-content:space-between; padding:35px 20px 30px 20px; border-radius:12px; flex-wrap:wrap; position:relative;"><h4 style="font-size:17px; font-family:system-ui; padding:10px; border:0px solid #00000060; border-radius:8px;"><i class="fa-solid fa-sd-card"></i> SD Card or USB Drive</h4> <h4 style="font-size:17px; font-family:system-ui; padding:10px; border:0px solid #00000060; border-radius:8px;"><i class="fa-solid fa-globe"></i> Internet Connection</h4> <h4 style="font-size:17px; font-family:system-ui; padding:10px; border:0px solid #00000060; border-radius:8px;"><i class="fa-solid fa-desktop"></i> Windows, Mac, Linux, or Android Device</h4><div style="height:40px; border-radius:8px;  position:relative;">
<a href="https://github.com/WiiLink24/WiiLink24-Patcher/releases"><button type="button" style="height:50px; padding-left:28px; padding-right:28px; border-radius:12px 4px 4px 12px; color:white !important; transform:translate(0, -8px); font-family:system-ui;" class="btn1 btn btn-success"><i class="fa-solid fa-download"></i> WiiLink Patcher</button></a>
<a href="https://github.com/AyeItsHarry/WiiLinkPatcherAndroid#getting-started"><button type="button" style="height:50px; padding-left:18px; padding-right:18px; border-radius:4px 12px 12px 4px; color:white !important; transform:translate(0, -8px); font-family:system-ui;" class="btn1 btn btn-success"><i class="fa-brands fa-android"></i></button></a>
</div></div>
</br>


## Section I - Priiloader and installing EULA

1. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> Download the `Priiloader Installer` from [here](https://oscwii.org/library/app/priiloader), `Load Priiloader` from [here](https://oscwii.org/library/app/LoadPriiloader), and `system-channel-restorer` from [here](https://oscwii.org/library/app/system-channel-restorer).
2. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> Unzip all 3 zip files, and copy the `apps` folder from within each to the root of your SD Card or USB Drive.
3. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> Visit [this site](https://garyodernichts.github.io/priiloader-patch-gen/) to generate a Priiloader patch that will fix a timestamp issue.
4. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> Follow the instructions on the page then copy the result.
5. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> On your SD Card or USB Drive, traverse to `apps/priiloader` and open `hacks_hash.ini`
6. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> Paste the patch from `Step 6` at the bottom of the `hacks_hash.ini` Save the file, then proceed to `Step 9`
7. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> Launch `Priiloader`.
8. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> Follow the installation steps.
9. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> Launch `Load Priiloader`
10. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> Using your Wii Remote, go to `System Menu Hacks`.
11. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> Enable `Fix NWC24iSetUniversalTime` from the menu. If you're on a Wii U, enable `Permanent vWii System Settings`, `Wii System Settings via Options Button`, and `Create message via Calendar button`. (Feel free to enable other options while you're in this menu)
12. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> Scroll down to `save settings` and press A, then press B to go back to the main menu of Priiloader.
13. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> Return to the Homebrew Channel.
14. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> Launch `system-channel-restorer`.
15. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> Press A to select `EULA`.
16. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> Press + to install.
17. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> Press Home to return to the Homebrew Channel.
18. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> Press Home, then `Exit to System Menu`.

</br>

<hr style="border-top:2px solid var(--border-color);"/>

</br>

## Section II - Patching WADs

</br>

> [If you want to see detailed instructions on how to install the WADs, click here!](#section-ii---installing-wads)

</br>

1. Visit the [WiiLink Patcher releases page](https://github.com/WiiLink24/WiiLink24-Patcher/releases) and download the correct patcher for your operating system.
2. On `Windows`, run `WiiLinkPatcher_Windows_vXXX.exe`\*. <br>

   On `MacOS`, open a terminal window on the folder where the patcher downloaded, then run `chmod +x WiiLinkPatcher_macOS-<arch>_vXXX`\*. Afterwards, run `./WiiLink_Patcher_macOS-<arch>_vXXX`\* and the patcher will launch right on your terminal.<br>

   On `Linux`, open a terminal window on the folder where the patcher downloaded, then run `chmod +x WiiLinkPatcher_Linux-<arch>_vXXX`\*. Afterwards, run `./WiiLinkPatcher_Linux-<arch>_vXXX`\* and the patcher will launch right on your terminal.

   On `Android`, follow the guide [here](https://github.com/AyeItsHarry/WiiLinkPatcherAndroid#getting-started) to launch the unofficial patcher script in Termux.

   <l class="notice info">Alternatively, you can rename the patcher file on MacOS or Linux to a simpler filename like `WiiLinkPatcher` and run the commands with that name in mind.</l>

> \***For Linux and MacOS Users:** Replace `<arch>` with either `x64` or `ARM64` depending on your system architecture, and `XXX` with the latest version on the filename.

3. Choose your installation setup:

</br>

### Express Installation
   - Press `1` for `Express Install Setup`. Follow the steps below:
     1. Select your region for the WiiConnect24 channels.
     2. Select whether or not you would like to install the regional channels.
     3. Select what language you would like for the regional channels as well as your preferred Food Channel version if you chose to install them.
     4. Select your console platform.
     5. At the `Insert SD Card / USB Drive (if applicable)` step, press `1` to begin patching.

### Custom Installation
   - Press `2` for `Custom Install Setup`. Follow the steps below:
     1. Select which channels you would like to install out of the list.
     2. Select your console platform.
     3. At the `Insert SD Card / USB Drive (if applicable)` step, press `1` to begin patching.
     4. It may take a moment for the patcher to download the files to your SD Card or USB Drive.
     5. Once it's done, you can safely close the patcher. All of the files are ready on your SD Card.
     6. If it did not copy everything automatically to your SD Card or USB Device, copy the `WAD` and `apps` folder next to the `WiiLink Patcher` file to your SD Card or USB Device.

</br>

</br>
<hr style="border-top:2px solid var(--border-color);">
</br>

## Section III - Installing WADs and Patching `Wii Mail`

<l class="notice info">If you already have `Wii Mail` patched for use with RiiConnect24, you don't need to run the WiiLink Mail Patcher.</l>

1. Put your SD card or USB drive in your Wii.
2. Launch the Homebrew Channel on your Wii.
3. Launch yawmME (YAWM ModMii Edition).
4. Press `A` to select your source device, which defaults to `Wii SD Card`.
5. If your Wii is not Japanese region, and you have chosen to install regional channels, install `WiiLink Address Settings.wad` before anything else. This is required for use of the Food Channel and the Photo Prints Channel.
6. Highlight all other WADs and press + to select them. When all of them are selected, press A twice to install the WADs.
7. After they are successfully installed, press the HOME Button to exit back to the Homebrew Channel.
8. Open the `WiiLink Mail Patcher` application inside the Homebrew Channel.
9. Follow the on-screen instructions.
10. Once the patcher is finished, you can return to the Wii Menu.

</br>
<hr style="border-top:2px solid var(--border-color);">
</br>

## Section IV (Optional) - Connecting to DNS and using the Address Settings

</br>

### Connecting to DNS

<l class="notice info smallwidth">This step is optional, but it's recommended as it allows additional services to function.</l>

1. Go to the Wii U Menu --> System Settings --> Internet --> Connection Settings --> the Connection that you're using --> Change Settings.

2. Make your way to the `DNS` setting.

3. Once you made sure that you're on the DNS setting, Click on `Don't Auto-Obtain`, then enter the following DNS info:

Set your Primary DNS to --> 167.235.229.36<br>
Set your Secondary DNS to --> 1.1.1.1

4. After you're done setting up the DNS, save the changes and let the system perform the Connection Test.

<l class="notice generic smallwidth">If the Connection Test failed, use a different Internet Connection or try again.</l>

5. Return to the vWii, then navigate to `Wii Options`.

6. Select WiiConnect24 then set "WiiConnect24" and "Standby Connection" to On.

7. Go to the 1st page of the "Internet" page, then select "User Agreements", then select "Yes".

8. Allow the EULA to load. The developers recommended that you read the EULA, as it gives information about the service. If you do not see the WiiLink logo on the EULA, the DNS will not work on your network. If you want to enable it, you can use the <a href="https://github.com/RiiConnect24/DNS-Server">DNS Server application</a>.

9. Once you read the EULA, Click on "I Accept".

</br>

### Adding Personal Information

<l class="notice generic smallwidth">WiiLink never stores your personal data. For more information on what is used, read our [Privacy Policy](/privacy-policy).</l>

<l class="notice info smallwidth">Adding your personal information to the Address Settings will allow the Photo Prints Channel to send images to your email, and the Food Channel to deliver the food to your house.</l>

<l class="notice warn smallwidth">You are responsible for entering your correct Address Information. Failure to do so may result in emails and/or orders not succeeding.</l>

### Photo Prints Channel

1. Launch the Photo Prints Channel from your Wii's home menu.
2. On the bottom right, press `Address Settings` and then `Yes`.
3. Click on `Email Address` within the settings and type in your email address. (make sure you **put it in correctly** or it **will not work!**)
4. Press `OK` and then `Done`.
5. Once you are in the SPD main menu, choose `Digicam` in the `Choose Channel` menu.

### Food Channel

<l class="notice warn smallwidth">If you want to use the **Domino's** version of the Food Channel, please follow this [guide](demae) instead. Otherwise, proceed with the guide below.</l>

1. Launch the Food Channel from your Wii's home menu.
2. In the Delivery Address, Press the `Change Address Information` button in the main menu.
3. Replace the Placeholder info with the Following:

- `Your First and Last Name`
- `Your Phone Number (country code FIRST, phone number afterwards)`
- `Your City`
- `Your Home Address`
- `Your Zip Code`

(Make sure you **put it in correctly** or it **will not work!** Use the example data in the settings as a template to put your information in correctly.)

4. Press `OK` and then `Done`
5. Once you are in the SPD main menu, choose `Demae` in the `Choose Channel` menu.
6. When you return to the Food Channel via `SPD`, it will display your information that you put in and will give a confirmation box. Once you double check and everything is correct, click on Yes.