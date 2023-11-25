<?php
/**
 * Plugin Name:       10 - ACF Multi Block plugin
 * Description:       A demo plugin for multi-block dev with ACF
 * Requires at least: 6.3
 * Requires PHP:      7.4
 * Version:           0.0.1
 * Author:            aplauche
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       fsdacf
 *
 * @package           fsdacf
 */

// Define our handy constants.
define( 'PLUGIN_DIR', __DIR__ );
define( 'PLUGIN_URL', plugin_dir_url( __FILE__ ) );
//define( 'BLOCKS_DIR', PLUGIN_DIR . '/blocks/' );


// Includes
require 'includes/acf-config.php';
require 'includes/permissions.php';
require 'includes/register-blocks.php';
