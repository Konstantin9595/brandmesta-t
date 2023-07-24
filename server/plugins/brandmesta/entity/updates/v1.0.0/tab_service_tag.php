<?php

use Winter\Storm\Database\Schema\Blueprint;
use Winter\Storm\Database\Updates\Migration;
use Winter\Storm\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('brandmesta_entity_tab_service_tag', function (Blueprint $table) {
            $table->unsignedBigInteger('service_tab_item_id');
            $table->unsignedBigInteger('service_tag_id');
            $table->primary(['service_tab_item_id', 'service_tag_id']);
            $table->foreign('service_tab_item_id')->references('id')->on('brandmesta_entity_service_tab_items')->onDelete('cascade');
            $table->foreign('service_tag_id')->references('id')->on('brandmesta_entity_service_tags')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('brandmesta_entity_tab_service_tag');
    }
};
