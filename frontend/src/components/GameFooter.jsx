
const GameFooter = () => {
  return (
    <footer className="game-footer" style={{ 
      padding: '1.5rem 0', // Reduced padding
      position: 'relative',
      background: 'var(--color-background)', // Ensure footer matches dark theme
      borderTop: `1px solid var(--color-border)` // Subtle top border with accent color
    }}>
      <div className="container" style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center' // Center the content
      }}>
        <p style={{
          fontSize: '0.9rem', // Adjusted font size
          color: 'var(--color-text-body)', // Light gray text
          fontFamily: 'Inter, sans-serif',
          margin: 0 // Remove default margin
        }}>
          Made by Dhruv
        </p>
      </div>
      {/* Removed <style jsx> as it's not needed for this simplified footer */}
    </footer>
  )
}

export default GameFooter
