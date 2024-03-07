import React from 'react'
import team from '../../teamData/team'
import "../Team/Team.css"
interface TeamMember {
    id: number;
    name: string;
    regNo: number;

}
const Team: React.FC = () => {
    const teamMembers = team as TeamMember[];

    const firstFive = teamMembers.slice(0, 5);
    const lastFive = teamMembers.slice(-5);
    return (
        <div className='theTeam'>
            <h1>Meet the Team</h1>
            <div className='allTeams'>
                <div className='firstFive'>
                    {firstFive.map((teamMember) => (
                        <div key={teamMember.id}>
                            <h3>{teamMember.name}</h3>
                            <h3>{teamMember.regNo}</h3>
                        </div>
                    ))}
                </div>
                <div className='lastFive'>
                    {lastFive.map((teamMember) => (
                        <div key={teamMember.id}>
                            <h3>{teamMember.name}</h3>
                            <h3>{teamMember.regNo}</h3>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Team