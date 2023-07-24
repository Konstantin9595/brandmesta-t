<?php

namespace Brandmesta\Entity;

// use Backend;
// use Backend\Models\UserRole;
use System\Classes\PluginBase;

/**
 * Entity Plugin Information File
 */
class Plugin extends PluginBase
{

    /**
     * Returns information about this plugin.
     */
    public function pluginDetails(): array
    {
        return [
            'name'        => 'brandmesta.entity::lang.plugin.name',
            'description' => 'brandmesta.entity::lang.plugin.description',
            'author'      => 'Brandmesta',
            'icon'        => 'icon-leaf'
        ];
    }

    /**
     * Register method, called when the plugin is first registered.
     */
    public function register()
    {
        if ($this->app->environment() !== 'production') {
            $this->app->register(\Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider::class);
        }
    }

    /**
     * Boot method, called right before the request route.
     */
    // public function boot(): void
    // {
    //     return [

    //     ]
    // }

    /**
     * Registers any frontend components implemented in this plugin.
     */
    // public function registerComponents(): array
    // {
    //     return []; // Remove this line to activate

    //     return [
    //         'Brandmesta\Entity\Components\MyComponent' => 'myComponent',
    //     ];
    // }

    /**
     * Registers any backend permissions used by this plugin.
     */
    // public function registerPermissions(): array
    // {
    //     return []; // Remove this line to activate

    //     return [
    //         'brandmesta.entity.some_permission' => [
    //             'tab' => 'brandmesta.entity::lang.plugin.name',
    //             'label' => 'brandmesta.entity::lang.permissions.some_permission',
    //             'roles' => [UserRole::CODE_DEVELOPER, UserRole::CODE_PUBLISHER],
    //         ],
    //     ];
    // }

    /**
     * Registers backend navigation items for this plugin.
     */
    // public function registerNavigation(): array
    // {
    //     return []; // Remove this line to activate

    //     return [
    //         'entity' => [
    //             'label'       => 'brandmesta.entity::lang.plugin.name',
    //             'url'         => Backend::url('brandmesta/entity/mycontroller'),
    //             'icon'        => 'icon-leaf',
    //             'permissions' => ['brandmesta.entity.*'],
    //             'order'       => 500,
    //         ],
    //     ];
    // }
}
