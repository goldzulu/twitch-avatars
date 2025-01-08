# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2025
### Added
- New VoiceTech characters: Groot, Hulk, Thor, Biden, Trump
- Speech modification for Groot character - now speaks in "I Am Groot" variations
- New audio commands: guitar, victory, crowd, wrong
- Improved hitbox adjustment for sprites based on animation frames
- Scale manager configuration for better display handling
- Support for multiple chained commands in chat

### Changed
- Updated dependencies including core-js to 3.35.1 and Phaser to 3.60.0
- Improved browser compatibility with updated Babel configuration
- Enhanced character animations with better frame handling
- Optimized webpack configuration for better build performance

### Fixed
- Sprite collision detection improvements
- Character hitbox sizing now properly matches animation frames
- Memory management improvements for sprite cleanup

### Security
- Added CodeQL analysis workflow for automated security scanning
- Updated dependencies to patch security vulnerabilities 

### Github Actions
- Fixed Github Actions workflow with more modern actions
