import { DIRECT_PLUGIN, PLUGIN_OPERATIONS } from '@openedx/frontend-plugin-framework';

const config = {
  pluginSlots: {
    footer_slot: {
      plugins: [
        {
          // Hide the default footer
          op: PLUGIN_OPERATIONS.Hide,
          widgetId: 'default_contents',
        },
        {
          // Insert a custom footer
          op: PLUGIN_OPERATIONS.Insert,
          widget: {
            id: 'custom_footer',
            type: DIRECT_PLUGIN,
            RenderWidget: () => (
              <footer style={{ 
                backgroundColor: 'white', 
                padding: '1rem', 
                display: 'flex', 
                justifyContent: 'flex-start', 
                alignItems: 'center' 
              }}>
                <div style={{ marginRight: '1rem' }}> 
                  <img src="https://edunextpublic.s3.us-west-2.amazonaws.com/edxsites/sd-files/oddisey-platform/189811072.png" alt="Oddisey Institute Logo" style={{ width: '100px', height: 'auto' }} />
                </div>
                <p>Oddisey Institute</p>
              </footer>
            ),
          },
        },
      ]
    }
  },
}

export default config;