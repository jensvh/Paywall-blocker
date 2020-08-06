@echo off
:: Ask for version
set /p pw_version="Enter version: "
powershell Compress-Archive ../*.json,../*.js,../icons/ Paywall-Blocker-v%pw_version%.zip
PAUSE