<?php

use Brandmesta\Entity\Models\PageMetaData;
use Brandmesta\Entity\Models\ServiceListItem;
use Brandmesta\Entity\Models\ServiceTabItem;
use Brandmesta\Entity\Models\ServiceTag;

Route::group(['prefix' => 'api'], function () {
    Route::get('page/{id}', function ($id) {
        return Response::json(PageMetaData::find($id));
    });

    Route::get('service/list-items', function () {
        return Response::json(ServiceListItem::all());
    });

    Route::get('service/tab-items', function () {
        $tab_items = ServiceTabItem::all();

        foreach ($tab_items as $key => $tab_item) {
            $tab_items[$key]['service_tag'] = $tab_item->service_tag;
        }

        return Response::json($tab_items);
    });

    Route::get('service/tags', function () {
        return Response::json(ServiceTag::all());
    });
});
