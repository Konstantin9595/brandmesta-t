<?php

namespace Brandmesta\Entity\Updates;

use Seeder;
use Winter\Storm\Support\Facades\DB;

//use Brandmesta\Entity\Models\ServiceTag;

class SeedTabServiceTag extends Seeder
{
    public function run()
    {
        Db::table('brandmesta_entity_tab_service_tag')->upsert([
            ['service_tab_item_id' => 1, 'service_tag_id' => 1],
            ['service_tab_item_id' => 1, 'service_tag_id' => 2],
            ['service_tab_item_id' => 1, 'service_tag_id' => 3],
            ['service_tab_item_id' => 1, 'service_tag_id' => 4],
            ['service_tab_item_id' => 1, 'service_tag_id' => 5],
            ['service_tab_item_id' => 2, 'service_tag_id' => 1],
            ['service_tab_item_id' => 2, 'service_tag_id' => 2],
            ['service_tab_item_id' => 2, 'service_tag_id' => 3],
            ['service_tab_item_id' => 2, 'service_tag_id' => 4],
            ['service_tab_item_id' => 2, 'service_tag_id' => 5],
            ['service_tab_item_id' => 3, 'service_tag_id' => 1],
            ['service_tab_item_id' => 3, 'service_tag_id' => 2],
            ['service_tab_item_id' => 3, 'service_tag_id' => 3],
            ['service_tab_item_id' => 3, 'service_tag_id' => 4],
            ['service_tab_item_id' => 3, 'service_tag_id' => 5],
        ], ['service_tab_item_id', 'service_tag_id']);
    }
}
