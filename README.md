Here’s a sample 7–1 directory structure,<br>
I’ve included some examples of files that would sit inside of each folder:
<br> <br>
sass/     <br>
|<br>
|– abstracts/ (or utilities/)<br>
|   |– _variables.scss    // Sass Variables<br>
|   |– _functions.scss    // Sass Functions<br>
|   |– _mixins.scss       // Sass Mixins<br>
|           <br>
|– base/<br>
|   |– _reset.scss        // Reset/normalize<br>
|   |– _typography.scss   // Typography rules<br>
|              <br>
|– components/ (or modules/)<br>
|   |– _buttons.scss      // Buttons<br>
|   |– _carousel.scss     // Carousel<br>
|   |– _slider.scss       // Slider<br>
|            <br>
|– layout/  <br>
|   |– _navigation.scss   // Navigation<br>
|   |– _grid.scss         // Grid system<br>
|   |– _header.scss       // Header<br>
|   |– _footer.scss       // Footer<br>
|   |– _sidebar.scss      // Sidebar<br>
|   |– _forms.scss        // Forms<br>
|                                <br>
|– pages/                                    <br>
|   |– _home.scss         // Home specific styles<br>
|   |– _about.scss        // About specific styles<br>
|   |– _contact.scss      // Contact specific styles<br>
|                                                         <br>
|– themes/                                                <br>
|   |– _theme.scss        // Default theme<br>
|   |– _admin.scss        // Admin theme<br>
|                                       <br>
|– vendors/                             <br>
|   |– _bootstrap.scss    // Bootstrap  <br>
|   |– _jquery-ui.scss    // jQuery UI  <br>
|                                       <br>
– main.scss              // Main Sass file<br>
<!-- Description --><br>
**Abstracts (or utilities):** holds Sass tools, helper files, variables, functions, mixins and other config files. These files are meant to be just helpers which don’t output any CSS when compiled.

**Base**: holds the boilerplate code for the project. Including standard styles such as resets and typographic rules, which are commonly used throughout your project.

**Components** (or modules): holds all of your styles for buttons, carousels, sliders, and similar page components (think widgets). Your project will typically contain a lot of component files — as the whole site/app should be mostly composed of small modules.

**Layout**: contains all styles involved with the layout of your project. Such as styles for your header, footer, navigation and the grid system.

**Pages**: any styles specific to individual pages will sit here. For example it’s not uncommon for the home page of your site to require page specific styles that no other page receives.

**Themes**: this is likely not used in many projects. It would hold files that create project specific themes. For example if sections of your site contain alternate color schemes.

**Vendors**: contains all third party code from external libraries and frameworks — such as Normalize, Bootstrap, jQueryUI, etc. However, there is often a need to override vendor code. If this is required, its good practice to create a new folder called vendors-extensions/ and then name any files after the vendors they overwrite. The filevendors-extensions/_bootstrap.scss would contain all your Bootstrap overrides — as editing the vendor files themselves, isn’t generally a good idea.

**Main.scss**: This file should only contain your imports! For example..

<p>
@import 'abstracts/variables';<br>
@import 'abstracts/functions';<br>
@import 'abstracts/mixins';  <br>
                             <br>
@import 'vendors/bootstrap';<br>
@import 'vendors/jquery-ui';<br>
                            <br>
@import 'base/reset';       <br>
@import 'base/typography';  <br>
                           <br>
@import 'layout/navigation';<br>
@import 'layout/grid';      <br>
@import 'layout/header';    <br>
@import 'layout/footer';    <br>
@import 'layout/sidebar';   <br>
@import 'layout/forms';     <br>
                            <br>
@import 'components/buttons';<br>
@import 'components/carousel';<br>
@import 'components/slider';  <br>
                             <br>
@import 'pages/home';        <br>
@import 'pages/about';       <br>
@import 'pages/contact';     <br>
                             <br>
@import 'themes/theme';      <br>
@import 'themes/admin';      <br>
</p>                         <br>

Note: _There’s no need to include the _ or .scss file extension when importing_

<h4>Create doc</h4>
<p>command: <br>
sassdoc src/scss dist/doc
sassdoc src/scss --verbose --debug
</p>
