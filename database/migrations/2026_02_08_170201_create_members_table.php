<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('members', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('batch');
            $table->string('department');
            $table->string('upozela');
            $table->string('phone')->unique();
            $table->string('blood_group');
            $table->string('photo')->nullable();
            $table->boolean('has_job')->nullable();
            $table->string('job_post')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('members');
    }
};
