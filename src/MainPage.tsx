import { TracksList } from './ui/components/TracksList';
import { TrackDetail } from './ui/components/TrackDetail';
import { useTrackSelection } from './bll/useTrackSelection';

export function MainPage() {
  const { trackId, setTrackId } = useTrackSelection();

  return (
    <div>
      <div style={{ display: 'flex', gap: '30px' }}>
        <TracksList
          selectedTrackId={trackId}
          onTrackSelected={(id: string | null) => setTrackId(id)}
        />
        <TrackDetail trackId={trackId} />
      </div>
    </div>
  );
}
