const Attak = ({ attak }) => {
  return (
    <div className="attak">
      <table>
        <tbody>
          <tr>
            <td className="attak-name">{attak.stats?.[0].stat.name}</td>
            <td className="attak-range-outer">
              <div className="attak-range-right">
                <div
                  className="attak-range-right-inner"
                  style={{
                    width: `${Math.round(
                      attak.stats?.[0].base_stat &&
                        (attak.stats?.[0].base_stat * 100) / 255
                    )}%`,
                  }}
                ></div>
              </div>
            </td>
            <td className="attak-max">
              {Math.round(
                attak.stats?.[0].base_stat && attak.stats?.[0].base_stat
              )}
              <span> 255</span>
            </td>
          </tr>
          <tr>
            <td className="attak-name">{attak.stats?.[1].stat.name}</td>
            <td className="attak-range-outer">
              <div className="attak-range-right">
                <div
                  className="attak-range-right-inner"
                  style={{
                    width: `${Math.round(
                      attak.stats?.[1].base_stat &&
                        (attak.stats?.[1].base_stat * 100) / 181
                    )}%`,
                  }}
                ></div>
              </div>
            </td>
            <td className="attak-max">
              {Math.round(
                attak.stats?.[1].base_stat && attak.stats?.[1].base_stat
              )}
              <span> 181</span>
            </td>
          </tr>
          <tr>
            <td className="attak-name">{attak.stats?.[2].stat.name}</td>
            <td className="attak-range-outer">
              <div className="attak-range-right">
                <div
                  className="attak-range-right-inner"
                  style={{
                    width: `${Math.round(
                      attak.stats?.[2].base_stat &&
                        (attak.stats?.[2].base_stat * 100) / 250
                    )}%`,
                  }}
                ></div>
              </div>
            </td>
            <td className="attak-max">
              {Math.round(
                attak.stats?.[2].base_stat && attak.stats?.[2].base_stat
              )}
              <span> 250</span>
            </td>
          </tr>
          <tr>
            <td className="attak-name">{attak.stats?.[3].stat.name}</td>
            <td className="attak-range-outer">
              <div className="attak-range-right">
                <div
                  className="attak-range-right-inner"
                  style={{
                    width: `${Math.round(
                      attak.stats?.[3].base_stat &&
                        (attak.stats?.[3].base_stat * 100) / 194
                    )}%`,
                  }}
                ></div>
              </div>
            </td>
            <td className="attak-max">
              {Math.round(
                attak.stats?.[3].base_stat && attak.stats?.[3].base_stat * 100
              )}
              <span> 194</span>
            </td>
          </tr>
          <tr>
            <td className="attak-name">{attak.stats?.[4].stat.name}</td>
            <td className="attak-range-outer">
              <div className="attak-range-right">
                <div
                  className="attak-range-right-inner"
                  style={{
                    width: `${Math.round(
                      attak.stats?.[4].base_stat &&
                        (attak.stats?.[4].base_stat * 100) / 230
                    )}%`,
                  }}
                ></div>
              </div>
            </td>
            <td className="attak-max">
              {Math.round(
                attak.stats?.[4].base_stat && attak.stats?.[4].base_stat
              )}
              <span> 230</span>
            </td>
          </tr>
          <tr>
            <td className="attak-name">{attak.stats?.[5].stat.name}</td>
            <td className="attak-range-outer">
              <div className="attak-range-right">
                <div
                  className="attak-range-right-inner"
                  style={{
                    width: `${Math.round(
                      attak.stats?.[5].base_stat &&
                        (attak.stats?.[5].base_stat * 100) / 200
                    )}%`,
                  }}
                ></div>
              </div>
            </td>
            <td className="attak-max">
              {Math.round(
                attak.stats?.[5].base_stat && attak.stats?.[5].base_stat
              )}
              <span> 200</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Attak;
