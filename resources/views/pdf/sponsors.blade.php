<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        /* Modern CSS works perfectly here */
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;600;700&display=swap');

        body { 
            font-family: 'Hind Siliguri', sans-serif; 
            padding: 20px;
        }
        
        table { 
            width: 100%; 
            border-collapse: collapse; 
            margin-top: 20px;
        }

        th, td { 
            border: 1px solid #291a1a; 
            padding: 5px; 
            text-align: left; 
        }

        .photo { 
            width: 40px; 
            height: 40px; 
            border-radius: 50%; 
            object-fit: cover;
        }
        
        h2 { color: #0d9488; text-align: center; }
    </style>
</head>
<body>
    <h2>Sponsors List</h2>
    <table>
        <thead>
            <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Role</th>
                <th>Phone</th>
                <th>Location</th>
            </tr>
        </thead>
        <tbody>
            @foreach($sponsors as $sponsor)
            <tr>
                <td>
                    @if($sponsor->photo)
                        {{-- Use public_path for local files --}}
                        <img src="{{ public_path('storage/' . $sponsor->photo) }}" class="photo">
                    @else
                        <span>No Photo</span>
                    @endif
                </td>
                <td><strong>{{ $sponsor->name }}</strong></td>
                <td>{{ $sponsor->role }}</td>
                <td>{{ $sponsor->phone }}</td>
                <td>{{ $sponsor->location_text }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>