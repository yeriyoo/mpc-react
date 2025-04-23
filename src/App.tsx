import { useEffect } from 'react';
import { Map, View } from 'ol';
import WebGLTileLayer from 'ol/layer/WebGLTile';
import { OSM } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import { defaults as defaultsControls } from 'ol/control';

function App() {
  useEffect(() => {
    const map = new Map({
      target: 'baseMap',
      layers: [
        new WebGLTileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([126.978, 37.5665]), // 서울
        zoom: 7,
      }),
      controls: defaultsControls({
        attribution: false,
        rotate: false,
        zoom: false,
      }),
    });

    return () => {
      if (map) map.dispose();
    };
  }, []);
  return (
    <main>
      <section>
        <div id="baseMap" />
      </section>
    </main>
  );
}

export default App;
