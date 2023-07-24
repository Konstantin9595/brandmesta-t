<?php

namespace Brandmesta\Entity\Updates;

use Seeder;
use Brandmesta\Entity\Models\ServiceTabItem;

class SeedServiceTabItems extends Seeder
{
    public function run()
    {
        ServiceTabItem::upsert([
            ['label' => 'Исследования и анализ', 'title' => 'Хорошее начало.', 'description' => 'Комплексное погружение в контекст бизнеса, формирование цели и определение ключевых задач проекта', 'icon_name' => 'explore'],
            ['label' => 'Брендинг и айдентика', 'title' => 'Единственно верный ход.', 'description' => 'Когда нужно отразить уникальный характер компании, ее ценности и приемущества - все в запоминающихся образах для коммуникации с аудиторией', 'icon_name' => 'branding'],
            ['label' => 'Стратегия и продвижение', 'title' => 'Правильное решение для роста.', 'description' => 'Когда пора заявить о себе и продумать все до мелочей: от стратегической цели до креативных постов в социальных сетях и публикаций в СМИ', 'icon_name' => 'strategy'],
        ], ['label', 'title', 'description', 'icon_name']);
    }
}
