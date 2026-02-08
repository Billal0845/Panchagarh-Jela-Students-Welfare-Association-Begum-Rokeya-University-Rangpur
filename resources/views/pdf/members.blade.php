<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: sans-serif; font-size: 12px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
        h2 { text-align: center; color: #333; }
    </style>
</head>
<body>
    <h2>Member Directory</h2>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Batch</th>
                <th>Dept</th>
                <th>Upozela</th>
                <th>Phone</th>
                <th>Blood</th>
                <th>Job</th>
            </tr>
        </thead>
        <tbody>
            @foreach($members as $member)
            <tr>
                <td>{{ $member->name }}</td>
                <td>{{ $member->batch }}</td>
                <td>{{ $member->department }}</td>
                <td>{{ $member->upozela }}</td>
                <td>{{ $member->phone }}</td>
                <td>{{ $member->blood_group }}</td>
                <td>{{ $member->has_job ? $member->job_post : 'N/A' }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>