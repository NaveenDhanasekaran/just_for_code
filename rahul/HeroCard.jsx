export default function HeroCard() {
  return (
    <div className="w-80 rounded-xl bg-black p-4 text-white shadow-2xl">
      <h3 className="text-sm font-semibold">Konsep design homepage</h3>
      <p className="mt-1 text-xs text-gray-400">Due Nov 30</p>

      <p className="mt-4 text-xs text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="mt-4">
        <div className="flex justify-between text-xs text-gray-400">
          <span>Task Progress</span>
          <span>3/9</span>
        </div>
        <div className="mt-2 h-1 w-full rounded bg-gray-700">
          <div className="h-1 w-1/3 rounded bg-pink-500"></div>
        </div>
      </div>
    </div>
  );
}