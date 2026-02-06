<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Sponsor extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'name',
        'description',
        'phone',
        'email',
        'website_link',
        'role',
        'location_text',
        'map_location_link',
        'message_from_him',
        'photo',
        'note',
        'sort_order',
        'is_active'
    ];

    /**
     * Accessor to get the full URL for the photo
     * This helps in your React frontend
     */
    protected $appends = ['photo_url'];

    public function getPhotoUrlAttribute()
    {
        if (!$this->photo) {
            return "https://placehold.co/400x400?text=No+Photo";
        }

        // If it's an external link, return as is; if local, return asset path
        return str_starts_with($this->photo, 'http')
            ? $this->photo
            : asset('storage/' . $this->photo);
    }
}
