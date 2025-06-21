#### [Back to Repo](https://github.com/adevdoingdevthings/discord-mod-things/)
# ❔ What mod to select?

### General Considerations for Discord Modding

*   **Pros:** Discord mods allow for extensive customization, transforming Discord into your ideal chat application.
*   **Cons:** Comprehensive documentation is scarce. Users often need to consult multiple sources, ask experienced individuals, or analyze existing code, which can be a challenging and confusing process. Modding discord is against Discord TOS, though, no valid reports of being banned only for modding Discord have been made. Discord's unofficial opinion appears to be not liking modding, but, not banning anyone.

----

<img src="https://avatars.githubusercontent.com/u/78881422?v=4" width="20px" height="20px" style="border-radius: 5px;" alt="Aliucord icon"> [**Aliucord**](https://github.com/Aliucord/Aliucord) (Android)
*   **Status:** Stale (Bug fixes only)
*   **Pros:** Very stable, highly performant (even with over 100 plugins), extensive plugin ecosystem with high compatibility, integrates new Discord features into an older Discord version largley regarded as the last good version.
*   **Cons:** Community is less active, no new features are being developed (only bug fixes).

<img src="https://avatars.githubusercontent.com/u/112445065?v=4" width="20px" height="20px" style="border-radius: 5px;" alt="Vendetta icon"> [**Vendetta**](https://github.com/vendetta-mod/Vendetta) (iOS, Android)
*   **Status:** Discontinued
*   **Pros:** Attracted many developers for plugins and themes (guessing around 40% still functional on modern Discord).
*   **Cons:** Development has ceased, leading to a decline in developer support and updates for plugins/themes. The codebase has historically been buggy, impacting modern clients like Kettu and Revenge, which are now undergoing recodes.

<img src="https://avatars.githubusercontent.com/u/101209876?v=4" width="20px" height="20px" style="border-radius: 5px;" alt="Enmity icon"> [**Enmity**](https://github.com/enmity-mod/enmity) (iOS)
*   **Status:** Discontinued
*   **Pros:** Supports both Vendetta and Enmity plugins, utilizes the same theme system as Vendetta (themes are as compatible as across Vendetta-based loaders).
*   **Cons:** Development has ceased, with minimal active developers remaining in the iOS modding community. Performance can be very slow, especially with Vendetta Plugin compatibility installed.

<img src="https://avatars.githubusercontent.com/u/163481464?v=4" width="20px" height="20px" style="border-radius: 5px;" alt="Bunny icon"> [**Bunny**](https://github.com/bunny-mod/Bunny) (iOS, Android)
*   **Status:** Discontinued
*   **Pros:** Modernized and continued Vendetta, with significant code improvements.
*   **Cons:** Development has ceased, leading to further developer attrition. The iOS maintainer introduced unwanted code into BunnyTweak, prompting BoundTweak to fork and remove it.

<img src="https://avatars.githubusercontent.com/u/133474989?v=4" width="20px" height="20px" style="border-radius: 5px;" alt="Unbound icon"> [**Unbound**](https://github.com/unbound-app/client) (iOS, Stale Android)
*   **Status:** Limited Development
*   **Pros:** Clean codebase with strong potential for future development.
*   **Cons:** Years of development have primarily resulted in only a theme system, making it not fully usable as a comprehensive mod. Has a very small developer base, with no active maintenance for the Android version.

<img src="https://avatars.githubusercontent.com/u/159218871?v=4" width="20px" height="20px" style="border-radius: 5px;" alt="Revenge icon"> [**Revenge**](https://github.com/revenge-mod/revenge-bundle) (Android, Discontinued iOS)
*   **Status:** Being Replaced
*   **Pros:** A functional version of Bunny for modern Discord, includes a "clear js bundle" button in developer settings.
*   **Cons:** Will be replaced by Revenge Next, which will be incompatible with current plugins. Heavily based on Bunny's codebase with minimal unique development, a lot of backend changes the user would never notice that leads to slower performance. The future of Revenge Next is uncertain due to a small community and developer base, and its reliance on Unbound's Hermes compiler. Ditching all Vendetta, Bunny and previous Revenge Plugins will most likely make even more developers stop maintaining their plugins for modern Discord. The code is overly complex, and Revenge Next is a rewrite of Revenge Rewrite.

<img src="https://avatars.githubusercontent.com/u/159218871?v=4" width="20px" height="20px" style="border-radius: 5px;" alt="Revenge icon"> [**Revenge Next**](https://github.com/revenge-mod/revenge-bundle-next) (Android)
*   **Status:** Active Development (Future Focus)
*   **Pros:** Extremely fast performance (*somehow* outperforming unmodified modern Discord in my testing), supports powerful plugins.
*   **Cons:** (See Revenge's general cons regarding its uncertain future).

<img src="https://raw.githubusercontent.com/CloudySnowX/BoundTweak/refs/heads/main/assets/logo/icon.png" width="20px" height="20px" style="border-radius: 5px;" alt="Boundtweak icon"> [**Boundtweak**](https://github.com/CloudySnowX/BoundTweak) (iOS)
*   **Status:** Active (Limited Development)
*   **Pros:** One of the few somewhat modern Discord mods for iOS, confirmed to be free of malicious code found in upstream versions.
*   **Cons:** The sole maintainer is not a developer, resulting in minimal code changes beyond renaming or AI. It does not use its own bundle, relying on Revenge's. Git usage by the owner appears lazy, similar to this repo.

<img src="https://raw.githubusercontent.com/C0C0B01/KettuManager/1220/Images/kettu_logo.png" width="20px" height="20px" style="border-radius: 5px;" alt="Kettu icon"> [**Kettu**](https://github.com/C0C0B01/Kettu) (Android)
*   **Status:** Active Development
*   **Pros:** Undergoing more structured development than Revenge, offers better performance and fewer crashes/bugs than its predecessors. Will be developed alongside Lumi, ensuring continued Vendetta plugin compatibility.
*   **Cons:** Development practices appear lazy, similar to BoundTweak, despite the maintainer being an active developer.

<img src="https://raw.githubusercontent.com/C0C0B01/KettuManager/1220/Images/kettu_logo.png" width="20px" height="20px" style="border-radius: 5px;" alt="Lumi icon"> [**Lumi**](https://github.com/C0C0B01/Lumi) (Android)
*   **Status:** Active Development
*   **Pros:** Supports very modern Discord versions, offers excellent first-party plugin and theme support, and is highly performant. Considered the best option for users prioritizing the already implemented first-party features and speed.
*   **Cons:** Heavily community-focused, making it less suitable for developers due to no third-party plugin or theme support. Has a small ecosystem of plugins and themes, with an even smaller community than Revenge Next, potentially limiting long-term support. May not align with expectations for a traditional Discord mod.

<img src="https://raw.githubusercontent.com/bluemods/Bluecord/refs/heads/master/patch/res/mipmap-xxxhdpi/logo.png" width="20px" height="20px" style="border-radius: 5px;" alt="Bluecord icon"> **Bluecord (WARNING: Known Security Risks)** (Android)
*   **Status:** Active (Highly Discouraged)
*   **Pros:** Based on an older, stable version of Discord (same as Aliucord). Faster than Aliucord.
*   **Cons:** [Allegations of malicious code (e.g., potential remote access capabilities)](https://drive.google.com/drive/u/0/mobile/folders/1Y2m2lMSpN3GlOcXyceaO88Ljnr8xuNcp). Source code does not contain the full project. The owner has a controversial history and the project's README.md attempts to discredit warnings about its safety ["for their own benefit"](https://github.com/bluemods/Bluecord/blob/master/README.md) [(archived version incase README changes and git history is dropped)](https://web.archive.org/web/20250414141539/https://github.com/bluemods/Bluecord/blob/master/README.md). Aliucord offers the same, and even better functionality without these severe security concerns.
