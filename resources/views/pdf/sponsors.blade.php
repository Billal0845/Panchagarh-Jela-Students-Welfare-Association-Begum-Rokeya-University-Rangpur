<!DOCTYPE html>
<html>
<head>
    <title>Sponsors List</title>
    <style>
        body { font-family: sans-serif; font-size: 12px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #130e0e; padding: 8px; text-align: left; }
        th { bg-color: #f2f2f2; font-weight: bold; }
        .photo { width: 50px; height: 50px; border-radius: 50%; object-fit: cover; }
        h2 { text-align: center; color: #0d9488; }
    </style>
</head>
<body>
    <h2>Our Legends (Sponsors List)</h2>
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
                    @if($sponsor['photo'])
                        <img src="{{ $sponsor['photo'] }}" class="photo">
                    @else
                        <span>No Photo</span>
                    @endif
                </td>
                <td><strong>{{ $sponsor['name'] }}</strong></td>
                <td>{{ $sponsor['role'] }}</td>
                <td>{{ $sponsor['phone'] }}</td>
                <td>{{ $sponsor['location'] ?? 'N/A' }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>