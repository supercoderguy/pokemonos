# PokemonOS Documentation

## Installation Guide

### System Requirements
- **Architecture**: x86_64 (64-bit)
- **RAM**: Minimum 2GB, recommended 4GB+
- **Storage**: Minimum 20GB free space
- **Boot Mode**: UEFI (recommended) or Legacy BIOS

### Download
Download the latest PokemonOS ISO from our [GitHub releases page](https://github.com/supercoderguy/pokemonos/releases).

### Verify the Download
Before flashing, verify the ISO integrity:

```bash
# Download the checksum file
wget https://github.com/supercoderguy/pokemonos/releases/download/latest/pokemonos-2026.03.24-x86_64.iso.sha256

# Verify the ISO
sha256sum -c pokemonos-2026.03.24-x86_64.iso.sha256
```

### Create Bootable USB
Use one of these tools to flash the ISO:

#### Linux (using dd)
```bash
# Find your USB device (be careful!)
lsblk

# Flash the ISO (replace /dev/sdX with your USB device)
sudo dd if=pokemonos-2026.03.24-x86_64.iso of=/dev/sdX bs=4M status=progress
```

#### Windows (using Rufus)
1. Download [Rufus](https://rufus.ie/)
2. Select the PokemonOS ISO
3. Choose your USB drive
4. Click "Start"

#### macOS/Linux (using dd)
```bash
# Find your USB device
diskutil list

# Unmount the USB (replace disk2 with your device)
diskutil unmountDisk /dev/disk2

# Flash the ISO
sudo dd if=pokemonos-2026.03.24-x86_64.iso of=/dev/rdisk2 bs=4M
```

### Boot from USB
1. Restart your computer
2. Enter BIOS/UEFI settings (usually F2, F10, F12, or Del)
3. Set USB as the first boot device
4. Save changes and exit
5. Boot from the USB drive

### Installation Process
1. You will be greeted with a command prompt. From here, you have two methods:
    a. Use Hyprland by first enabling SDDM with `systemctl enable --now sddm.service`
    b. Use the CLI to install PokemonOS
2. Run the installer with `archinstall`
3. Follow the instructions in the installer

### First Boot
After installation:
1. Remove the USB drive
2. Reboot your system
3. Login with your created credentials
4. Run system update: `sudo pacman -Syu`

## Post-Install Setup

### Package Management
PokemonOS uses pacman (Arch Linux package manager) and Flatpak (distro-agnostic packages):

Pacman:
```bash
# Update system
sudo pacman -Syu

# Install packages
sudo pacman -S ghostty

# Search for packages
pacman -Ss package-name

# Remove packages
sudo pacman -R package-name
```

Flatpak:
```bash
# Install packages
flatpak install com.valvesoftware.Steam

# Update packages
flatpak update

# Remove packages
flatpak uninstall com.valvesoftware.Steam
```

### Gaming Setup

#### Steam Installation
```bash
# Enable multilib repository (edit /etc/pacman.conf)
# Uncomment these lines:
# [multilib]
# Include = /etc/pacman.d/mirrorlist

# Update and install Steam
sudo pacman -Syu steam
```

#### Vulkan & Graphics Drivers
```bash
# For NVIDIA (proprietary)
sudo pacman -S nvidia nvidia-utils

# For AMD
sudo pacman -S mesa vulkan-radeon

# For Intel
sudo pacman -S mesa vulkan-intel
```

#### Gaming Performance Tips
- Use `gamemoded` for better performance: `sudo pacman -S gamemode`
- Enable Feral Gamemode in Steam launch options: `gamemoded %command%`
- Consider using Proton for Windows games

### Development Tools

#### Essential Development Packages
```bash
sudo pacman -S base-devel neovim
```

#### Programming Languages
```bash
# Python
sudo pacman -S python python-pip

# Node.js
sudo pacman -S nodejs npm

# Rust
sudo pacman -S rust

# Go
sudo pacman -S go
```

#### IDEs and Editors
```bash
# Visual Studio Code
sudo pacman -S code

# Sublime Text
sudo pacman -S sublime-text-4

# JetBrains Toolbox
sudo pacman -S jetbrains-toolbox
```

### Desktop Customization

#### Window Managers
PokemonOS comes with a lightweight window manager by default. You can install alternatives:

```bash
# i3 (tiling WM)
sudo pacman -S i3 i3status i3lock

# Awesome WM
sudo pacman -S awesome

# KDE Plasma
sudo pacman -S plasma kde-applications

# GNOME
sudo pacman -S gnome gnome-extra
```

#### Themes and Appearance
```bash
# GTK themes
sudo pacman -S arc-gtk-theme papirus-icon-theme

# Qt themes (for KDE apps)
sudo pacman -S breeze

# Terminal emulators
sudo pacman -S alacritty kitty ghostty
```

### System Maintenance

#### Regular Updates
```bash
# Update all packages
sudo pacman -Syu

# Update AUR packages (if using yay)
yay -Syu

# Update Flatpaks
flatpak update
```

#### System Cleanup
```bash
# Remove orphaned packages
sudo pacman -Qdtq | sudo pacman -Rns -

# Clean package cache
sudo pacman -Scc

# Clear journal logs (keep last 7 days)
sudo journalctl --vacuum-time=7d
```

#### Backup Important Data
```bash
# Backup home directory
tar -czf ~/backup-$(date +%Y%m%d).tar.gz ~/

# Backup package list
pacman -Qqe > ~/package-list.txt
```

### Troubleshooting

#### Common Issues

**No sound after installation**
```bash
# Install ALSA utils and pulseaudio
sudo pacman -S alsa-utils pulseaudio pulseaudio-alsa

# Start pulseaudio
systemctl --user start pulseaudio
```

**WiFi not working**
```bash
# Install network manager
sudo pacman -S networkmanager nm-applet

# Enable and start NetworkManager
sudo systemctl enable NetworkManager
sudo systemctl start NetworkManager
nohup nm-applet &  # Required for setting up an Internet connection outside of GNOME, KDE Plasma, and COSMIC

# Use nmtui for WiFi setup using the CLI
nmtui
```

**Graphics drivers issues**
```bash
# For hybrid graphics (NVIDIA/Intel)
sudo pacman -S nvidia nvidia-prime

# Use prime-run for NVIDIA apps
prime-run steam
```

#### Getting Help
- Check system logs: `journalctl -xe`
- Search Arch Wiki: [https://wiki.archlinux.org/](https://wiki.archlinux.org/)
- PokemonOS GitHub Issues: [https://github.com/supercoderguy/pokemonos/issues](https://github.com/supercoderguy/pokemonos/issues)

### Advanced Configuration

#### Custom Kernel
```bash
# Install linux-zen kernel
sudo pacman -S linux-zen linux-zen-headers

# Install linux-mainline kernel
sudo pacman -S linux-mainline linux-mainline-headers

# Update bootloader
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

#### Systemd Services
```bash
# List all services
systemctl list-units --type=service

# Enable a service
sudo systemctl enable service-name

# Start a service
sudo systemctl start service-name
```

#### Firewall Setup
```bash
# Install ufw
sudo pacman -S ufw

# Enable and start
sudo systemctl enable ufw
sudo systemctl start ufw

# Allow SSH
sudo ufw allow ssh

# Enable firewall
sudo ufw enable
```

Remember: PokemonOS is based on Arch Linux, so most Arch documentation applies. Always check the [Arch Wiki](https://wiki.archlinux.org/) for detailed guides and troubleshooting.