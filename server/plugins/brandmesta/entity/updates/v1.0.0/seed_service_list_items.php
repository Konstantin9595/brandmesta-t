<?php

namespace Brandmesta\Entity\Updates;

use Seeder;
use Brandmesta\Entity\Models\ServiceListItem;

class SeedServiceListItems extends Seeder
{
    public function run()
    {
        ServiceListItem::upsert([
            ['label' => 'Разработка сайта', 'description' => 'Когда пришла пора действовать, но не хватает самого главного', 'url' => '/site-develop'],
            ['label' => 'Обучение', 'description' => 'Когда ваша цель - лично во всем разобраться и стать экспертом', 'url' => '/education'],
            ['label' => 'Консультации', 'description' => 'Когда хочется сделать своими руками, но остались важные вопросы', 'url' => '/consult']
        ], ['label', 'description', 'url']);
    }
}
