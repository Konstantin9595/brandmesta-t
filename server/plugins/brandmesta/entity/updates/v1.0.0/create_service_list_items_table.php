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
        Schema::create('brandmesta_entity_service_list_items', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('label', 100);
            $table->string('description');
            $table->string('url', 40);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('brandmesta_entity_service_list_items');
    }
};
