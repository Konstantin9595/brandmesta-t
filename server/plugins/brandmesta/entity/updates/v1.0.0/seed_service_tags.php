<?php

namespace Brandmesta\Entity\Updates;

use Seeder;
use Brandmesta\Entity\Models\ServiceTag;

class SeedServiceTag extends Seeder
{
    public function run()
    {
        ServiceTag::upsert([

            ['label' => 'Позиционирование'],
            ['label' => 'Характер и ценности бренда'],
            ['label' => 'Нейминг / слоган'],
            ['label' => 'Логотип и фирменный стиль'],
            ['label' => 'Брендбук'],

        ], ['label']);
    }
}
