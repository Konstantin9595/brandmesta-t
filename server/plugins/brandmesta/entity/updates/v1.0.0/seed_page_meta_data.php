<?php

namespace Brandmesta\Entity\Updates;

use Seeder;
use Brandmesta\Entity\Models\PageMetaData;

class SeedPageMetaData extends Seeder
{
    public function run()
    {
        PageMetaData::create([
            'title' => 'Агенство территориального брендинга',
            'description' => 'Мы создаём уникальные бренды основываясь на глубоком понимание потребителей',
            'slug' => "/"
        ]);
    }
}
