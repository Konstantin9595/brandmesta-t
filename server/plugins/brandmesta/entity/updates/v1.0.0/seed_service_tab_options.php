<?php

namespace Brandmesta\Entity\Updates;

use Seeder;
use Winter\Storm\Support\Facades\DB;

class SeedTabOptions extends Seeder
{
    public function run()
    {
        Db::table('brandmesta_entity_service_tab_options')->upsert([
            ['label' => 'Для бизнеса'],
            ['label' => 'Для территории'],
        ], ['label', 'tab_item_id']);
    }
}
