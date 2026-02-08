<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    protected $fillable = [
        'name',
        'batch',
        'department',
        'upozela',
        'phone',
        'blood_group',
        'has_job',
        'photo',
        'job_post',
    ];

}
