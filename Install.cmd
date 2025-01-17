@echo off
setlocal enabledelayedexpansion

:: Check if bun is installed
where bun >nul 2>nul
if %errorlevel% equ 0 (
    set PACKAGE_MANAGER=bun
) else (
    :: Check if npm is installed
    where npm >nul 2>nul
    if %errorlevel% equ 0 (
        set PACKAGE_MANAGER=npm
    ) else (
        echo Neither bun nor npm are installed. Please install one of them.
        exit /b 1
    )
)

echo Using %PACKAGE_MANAGER% to install dependencies...

:: List of dependencies
set DEPENDENCIES=@discordjs/opus@^0.9.0 @distube/ytdl-core@^4.15.8 @stablelib/xchacha20poly1305@^2.0.0 axios@^1.7.7 canvas@^3.0.0 discord.js-selfbot-v13@^3.4.6 express@^4.21.1 ffmpeg@^0.0.4 libsodium-wrappers@^0.7.15 node-notifier@^10.0.1 opusscript@^0.1.1 sharp@^0.33.5 sodium@^3.0.2 systeminformation@^5.23.25 universal-speedtest@^3.0.0 ytdl-core@^4.11.5

:: Install dependencies
%PACKAGE_MANAGER% install %DEPENDENCIES%

:: Check if the installation was successful
if %errorlevel% neq 0 (
    echo Failed to install dependencies.
    exit /b 1
)

:: Run Main.js
echo Running Main.js...
node Main.js

pause
