<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('sponsors', function (Blueprint $table) {
            $table->id();

            // Required Fields
            $table->string('name');
            $table->text('description');
            $table->string('role'); // e.g., Founder, CEO, etc.
            $table->string('photo'); // Path to the image

            // Nullable Fields
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->string('website_link')->nullable();
            $table->string('location_text')->nullable();
            $table->text('map_location_link')->nullable(); // Long text for Google Map URLs
            $table->text('message_from_him')->nullable();
            $table->text('note')->nullable(); // Internal notes or extra info

            // Optional: for sorting display order
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sponsors');
    }
};
