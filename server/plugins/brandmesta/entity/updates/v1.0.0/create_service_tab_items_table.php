<?php

namespace Brandmesta\Entity\Updates;

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
        Schema::create('brandmesta_entity_service_tab_items', function (Blueprint $table) {
            $table->id();
            $table->string('label', 100);
            $table->string('title', 100);
            $table->string('description');
            $table->string('icon_name', 40);
            $table->unsignedBigInteger('tab_option_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('brandmesta_entity_service_tab_items');
    }
};
